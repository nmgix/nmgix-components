import "./_alert.scss";

export type AlertProps = {
  children: React.ReactNode;
  scheme: "notification" | "warning" | "interest" | "success";
  type: "header" | "window-fixed" | "fixed";
};

export const Alert: React.FC<AlertProps> = ({ children, scheme, type }) => {
  return (
    <div className={`alert alert-${type} alert-preset-${scheme}`}>
      <span className='alert-content'>{children}</span>
    </div>
  );
};
