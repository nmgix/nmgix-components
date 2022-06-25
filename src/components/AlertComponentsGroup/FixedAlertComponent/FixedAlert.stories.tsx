import { FixedAlert } from "./FixedAlert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Generic/Alerts/Fixed Alert",
  component: FixedAlert,
} as ComponentMeta<typeof FixedAlert>;

const GenericAlert: ComponentStory<typeof FixedAlert> = () => (
  <FixedAlert>
    Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
  </FixedAlert>
);

export const DefaultFixedAlert = GenericAlert.bind({});
