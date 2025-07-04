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
  <div
    className={`bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 ${className}`.trim()}
  >
    {renderHeader ? (
      renderHeader(title)
    ) : (
      <div className="card-header text-lg font-semibold mb-2 text-gray-800">
        {title}
      </div>
    )}
    <div className="card-content mb-2">{children}</div>
    {renderFooter && <div className="mt-4">{renderFooter()}</div>}
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
      <button
        onClick={onAddToCart}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        Add to Cart - ${product.price}
      </button>
    )}
  />
);
