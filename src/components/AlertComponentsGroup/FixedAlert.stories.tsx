import { Alert } from "./Alert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Generic/Alerts/Fixed Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const GenericAlert: ComponentStory<typeof Alert> = (args) => (
  <div style={{ height: "110vh" }}>
    <Alert type={args.type} scheme={args.scheme}>
      {args.children}
    </Alert>
  </div>
);

export const NotificationFixedAlert = GenericAlert.bind({});
NotificationFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "notification",
  type: "fixed",
};

export const WarningFixedAlert = GenericAlert.bind({});
WarningFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "warning",
  type: "fixed",
};

export const InterestFixedAlert = GenericAlert.bind({});
InterestFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "interest",
  type: "fixed",
};

export const SuccessFixedAlert = GenericAlert.bind({});
SuccessFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "success",
  type: "fixed",
};
