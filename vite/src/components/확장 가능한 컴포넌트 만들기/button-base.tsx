type ButtonBaseProps = {
  label: string;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
};

const ButtonBase = ({
  label,
  onClick,
  className = "",
  children,
}: ButtonBaseProps) => (
  <button className={`button ${className}`.trim()} onClick={onClick}>
    {children || label}
  </button>
);

// 변형된 컴포넌트가 기본 컴포넌트 확장
export const PrimaryButton = (props: ButtonBaseProps) => (
  <ButtonBase {...props} className="button-primary" />
);

export const SecondaryButton = (props: ButtonBaseProps) => (
  <ButtonBase {...props} className="button-secondary" />
);

export const DangerButton = (props: ButtonBaseProps) => (
  <ButtonBase {...props} className="button-danger" />
);

// 기존 컴포넌트에 손대지 않고 새로운 변형 추가가 가능
export const OutlineButton = (props: ButtonBaseProps) => (
  <ButtonBase {...props} className="button-outline" />
);
