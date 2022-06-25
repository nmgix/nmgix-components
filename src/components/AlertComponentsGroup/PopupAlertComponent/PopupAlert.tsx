import "./_popupAlert.scss";

type PopupAlertProps = {
  children: React.ReactNode;
};

export const PopupAlert: React.FC<PopupAlertProps> = ({ children }) => {
  return <div>{children}</div>;
};
