import "./_headerAlert.scss";

type HeaderAlertProps = {
  children: React.ReactNode;
};

export const HeaderAlert: React.FC<HeaderAlertProps> = ({ children }) => {
  return <div>{children}</div>;
};
