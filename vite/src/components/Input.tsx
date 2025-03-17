import { Ref } from 'react';

interface InputProps {
  ref: Ref<HTMLInputElement>;
  text: string;
}

const Input = ({ ref, text }: InputProps) => {
  return (
    <>
      <label>{text}</label>
      <input
        type="text"
        ref={ref}
      />
    </>
  );
};

export default Input;
