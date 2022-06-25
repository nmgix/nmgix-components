import "./_fixedAlert.scss";

type FixedAlertProps = {
  children: React.ReactNode;
};

export const FixedAlert: React.FC<FixedAlertProps> = ({ children }) => {
  return <div>{children}</div>;
};
