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

export const DefaultFixedAlert = GenericAlert.bind({});
DefaultFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "Notification",
  type: "Fixed",
};
