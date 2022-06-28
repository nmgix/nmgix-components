import "./_headerAlert.scss";

type HeaderAlertProps = {
  children: React.ReactNode;
  type: "notification" | "warning" | "interest";
};

export const HeaderAlert: React.FC<HeaderAlertProps> = ({ children, type }) => {
  return (
    <div className={`alert alert-header alert-preset-${type}`}>
      <span className='alert-content'>{children}</span>
    </div>
  );
};
