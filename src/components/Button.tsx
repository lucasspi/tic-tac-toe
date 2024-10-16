import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-blue-500 px-4 py-1 font-bold text-white mt-4 hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
