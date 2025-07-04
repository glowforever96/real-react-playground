// 추가하고 싶은 공통 props
type WithLoadingProps = {
  isLoading?: boolean;
};

// 고차 컴포넌트는 개방-폐쇄 원칙을 따르는 또 다른 방법을 제공
export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ isLoading, ...props }: P & WithLoadingProps) => {
    if (isLoading) {
      return <div className="loader">Loading...</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
};
