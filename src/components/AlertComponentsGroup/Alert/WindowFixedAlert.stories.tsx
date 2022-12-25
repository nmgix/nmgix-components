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

export const DefaultWindowFixedAlert = GenericAlert.bind({});
DefaultWindowFixedAlert.args = {
  children: <>Добавлен новый предмет!</>,
  scheme: "notification",
  type: "WindowFixed",
};
