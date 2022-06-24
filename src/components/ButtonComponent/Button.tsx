import "./_button.scss";

type buttonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<buttonProps> = ({ children }) => {
  return <button>{children}</button>;
};
