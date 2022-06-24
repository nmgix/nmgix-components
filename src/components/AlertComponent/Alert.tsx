import "./_alert.scss";

type alertProps = {
  children: React.ReactNode;
};

export const Alert: React.FC<alertProps> = ({ children }) => {
  return <div>{children}</div>;
};
