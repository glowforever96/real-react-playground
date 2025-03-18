import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { FetchComponent } from "../FetchComponent";
import userEvent from "@testing-library/user-event";

const MOCK_TODO = {
  userId: 1,
  id: 1,
  title: "title",
  completed: false,
};

const server = setupServer(
  http.get("/todos/:id", ({ params }) => {
    const todoId = params.id;

    if (Number(todoId)) {
      return HttpResponse.json({ ...MOCK_TODO, id: Number(todoId) });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
  render(<FetchComponent />);
});

describe("FetchComponent 테스트", () => {
  it("데이터를 불러오기 전에는 기본 문구가 뜬다.", async () => {
    const nowLoading = screen.getByText(/불러온 데이터가 없습니다./);
    expect(nowLoading).toBeInTheDocument();
  });

  it("버튼을 클릭하면 데이터를 불러온다.", async () => {
    const button = screen.getByRole("button", { name: /1번/ });
    await userEvent.click(button);

    const data = await screen.findByText(MOCK_TODO.title);
    expect(data).toBeInTheDocument();
  });

  it("버튼을 클릭하고 서버 요청에서 에러가 발생하면 에러문구를 노출한다.", async () => {
    server.use(
      http.get("todos/:id", () => {
        return new HttpResponse(null, { status: 503 });
      })
    );

    const button = screen.getByRole("button", { name: /1번/ });
    await userEvent.click(button);
    const error = await screen.findByText(/에러가 발생했습니다/);
    expect(error).toBeInTheDocument();
  });
});
