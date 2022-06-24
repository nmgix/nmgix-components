import { Alert } from "./Alert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Alerts/Default Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const GenericButton: ComponentStory<typeof Alert> = () => (
  <Alert>
    Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
  </Alert>
);

export const DefaultButton = GenericButton.bind({});
