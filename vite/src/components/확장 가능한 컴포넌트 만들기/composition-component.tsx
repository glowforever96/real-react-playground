type CardProps = {
  title: string;
  children: React.ReactNode;
  renderHeader?: (title: string) => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  className?: string;
};

export const Card = ({
  title,
  children,
  renderHeader,
  renderFooter,
  className = "",
}: CardProps) => (
  <div className={`card ${className}`.trim()}>
    {renderHeader ? (
      renderHeader(title)
    ) : (
      <div className="card-header">{title}</div>
    )}
    <div className="card-content">{children}</div>
    {renderFooter && renderFooter()}
  </div>
);

type Product = {
  name: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: () => void;
} & Omit<CardProps, "renderFooter">;

// 기존 코드를 변경하지 않고 확장
export const ProductCard = ({
  product,
  onAddToCart,
  ...props
}: ProductCardProps) => (
  <Card
    {...props}
    renderFooter={() => (
      <button onClick={onAddToCart}>Add to Cart - ${product.price}</button>
    )}
  />
);
