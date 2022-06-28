import { HeaderAlert } from "./HeaderAlert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Generic/Alerts/Header Alert",
  component: HeaderAlert,
} as ComponentMeta<typeof HeaderAlert>;

const GenericAlert: ComponentStory<typeof HeaderAlert> = () => (
  <HeaderAlert type='notification'>
    Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
  </HeaderAlert>
);

export const DefaultHeaderAlert = GenericAlert.bind({});
