import { Alert } from "./Alert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Generic/Alerts/Header Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const GenericAlert: ComponentStory<typeof Alert> = (args) => (
  <div style={{ height: "110vh" }}>
    <Alert type={args.type} scheme={args.scheme}>
      {args.children}
    </Alert>
  </div>
);

export const DefaultAlert = GenericAlert.bind({});
DefaultAlert.args = {
  children: (
    <>
      Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
    </>
  ),
  scheme: "Notification",
  type: "Header",
};

export const RunningTextAlert = GenericAlert.bind({});
RunningTextAlert.args = {
  children: <>Какая-то запредельно длинная новость, которая совсем не хочет влазить в ширину навбара, так как...</>,
  scheme: "Notification",
  type: "Header",
};
