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

export const NotificationHeaderAlert = GenericAlert.bind({});
NotificationHeaderAlert.args = {
  children: (
    <>
      Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
    </>
  ),
  scheme: "notification",
  type: "header",
};

export const WarningHeaderAlert = GenericAlert.bind({});
WarningHeaderAlert.args = {
  children: (
    <>
      Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
    </>
  ),
  scheme: "warning",
  type: "header",
};

export const InterestHeaderAlert = GenericAlert.bind({});
InterestHeaderAlert.args = {
  children: (
    <>
      Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
    </>
  ),
  scheme: "interest",
  type: "header",
};

export const SuccessHeaderAlert = GenericAlert.bind({});
SuccessHeaderAlert.args = {
  children: (
    <>
      Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
    </>
  ),
  scheme: "success",
  type: "header",
};
