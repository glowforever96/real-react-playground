import { DangerButton, PrimaryButton } from "./button-base";
import { Card, ProductCard } from "./composition-component";
import { withLoading } from "./poc-component";

const OpenClosedPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <PrimaryButton label="dddd" onClick={() => {}} />
      <DangerButton label="danger" onClick={() => {}} />
      <Card
        title="hi"
        renderHeader={(title) => (
          <div className="custom-header">{title} - 커스텀 헤더!</div>
        )}
      >
        <div>Card Contents</div>
      </Card>

      <ProductCard
        title="Product Card"
        product={{ price: 10000, name: "name" }}
        onAddToCart={() => {}}
        renderHeader={(title) => <div>{title} - product card</div>}
      >
        <div>Product Card Content</div>
      </ProductCard>

      <UserWithLoading isLoading name="Soon" />
      <UserWithLoading isLoading={false} name="Kwon" />
    </div>
  );
};

export default OpenClosedPage;

const User = ({ name }: { name: string }) => <div>{name}</div>;

const UserWithLoading = withLoading(User);
