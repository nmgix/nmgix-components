import "./_alert.scss";

export type AlertProps = {
  children: React.ReactNode;
  scheme: "notification" | "warning" | "interest" | "success";
  type: "header" | "window-fixed" | "fixed";
};

/**
 * Alert Component.
 * Multiple usecases component, can be used as header alert to inform about something (eg. event or other notification),
 * for onscroll window-fixed alert or inside components.
 * @param children any content, texr or tags
 * @param scheme choose a preset color scheme
 * @param type choose a preset alert type
 * @returns {React.FC<AlertProps>} Functional Component
 */
export const Alert: React.FC<AlertProps> = ({ children, scheme, type }) => {
  return (
    <div className={`alert alert-${type} alert-preset-${scheme}`}>
      <span className='alert-content'>{children}</span>
    </div>
  );
};
