import { Alert } from "./Alert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Generic/Alerts/Window Fixed Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const GenericAlert: ComponentStory<typeof Alert> = (args) => (
  <div style={{ height: "110vh" }}>
    <Alert type={args.type} scheme={args.scheme}>
      {args.children}
    </Alert>
  </div>
);

export const NotificationWindowFixedAlert = GenericAlert.bind({});
NotificationWindowFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "notification",
  type: "window-fixed",
};

export const WarningWindowFixedAlert = GenericAlert.bind({});
WarningWindowFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "warning",
  type: "window-fixed",
};

export const InterestWindowFixedAlert = GenericAlert.bind({});
InterestWindowFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "interest",
  type: "window-fixed",
};

export const SuccessWindowFixedAlert = GenericAlert.bind({});
SuccessWindowFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "success",
  type: "window-fixed",
};
