import { HeaderAlert } from "./HeaderAlert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Alerts/Default Alert",
  component: HeaderAlert,
} as ComponentMeta<typeof HeaderAlert>;

const GenericAlert: ComponentStory<typeof HeaderAlert> = () => (
  <HeaderAlert>
    Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
  </HeaderAlert>
);

export const DefaultAlert = GenericAlert.bind({});
