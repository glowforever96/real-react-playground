import { render, screen } from "@testing-library/react";
import StaticComponent from "../StaticComponent";

beforeEach(() => {
  render(<StaticComponent />);
});

describe("링크 확인", () => {
  it("링크가 3개 존재한다.", () => {
    const ul = screen.getByTestId("ul");
    expect(ul.children.length).toBe(3);
  });

  it("링크 목록의 스타일이 square다.", () => {
    const ul = screen.getByTestId("ul");
    expect(ul).toHaveStyle("list-style-type: square;");
  });
});

describe("리액트 링크 테스트", () => {
  it("리액트 링크가 존재한다.", () => {
    const reactLink = screen.getByText("리액트");
    expect(reactLink).toBeVisible();
  });

  it("리액트 링크가 올바른 주소로 존재한다.", () => {
    const reactLink = screen.getByText("리액트");

    expect(reactLink.tagName).toEqual("A");
    expect(reactLink).toHaveAttribute("href", "https://reactjs.org");
  });
});

describe("네이버 링크 테스트", () => {
  it("네이버 링크가 존재한다.", () => {
    const naverLink = screen.getByText("네이버");
    expect(naverLink).toBeVisible();
  });

  it("네이버 링크가 올바른 주소로 존재한다.", () => {
    const naverLink = screen.getByText("네이버");

    expect(naverLink.tagName).toEqual("A");
    expect(naverLink).toHaveAttribute("href", "https://www.naver.com");
  });
});

describe("구글 링크 테스트", () => {
  it("구글 링크가 존재한다.", () => {
    const googleLink = screen.getByText("구글");
    expect(googleLink).toBeVisible();
  });

  it("구글 링크가 올바른 주소로 존재한다.", () => {
    const googleLink = screen.getByText("구글");

    expect(googleLink.tagName).toEqual("A");
    expect(googleLink).toHaveAttribute("href", "https://www.google.co.kr");
  });

  it("구글은 같은 창에서 열려야 한다.", () => {
    const googleLink = screen.getByText("구글");
    expect(googleLink).not.toHaveAttribute("target");
  });
});
