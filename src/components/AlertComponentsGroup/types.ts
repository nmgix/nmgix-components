export enum AvailableSchemes {
  "notification",
  "warning",
  "interest",
  "success",
}

export type AlertProps = {
  children: React.ReactElement;
  scheme: keyof typeof AvailableSchemes;
  type: "Header" | "WindowFixed" | "Fixed";
};

export type AlertStackChildProps = AlertProps & { id: number };

export type AlertRef = {
  addAlert: (alert: AlertProps) => void;
  removeAlert: (id: number) => void;
} | null;
