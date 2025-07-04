// 폐쇠적인 컴포넌트
type ButtonProps = {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
};

export default function Button({ label, onClick, variant }: ButtonProps) {
  let className = "button";

  // 각 variant마다 직접 수정
  if (variant === "primary") {
    className += " button-primary";
  } else if (variant === "secondary") {
    className += " button-secondary";
  } else if (variant === "danger") {
    className += " button-danger";
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
