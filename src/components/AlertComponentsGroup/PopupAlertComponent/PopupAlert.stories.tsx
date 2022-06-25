import { PopupAlert } from "./PopupAlert";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Alerts/Default Alert",
  component: PopupAlert,
} as ComponentMeta<typeof PopupAlert>;

const GenericAlert: ComponentStory<typeof PopupAlert> = () => (
  <PopupAlert>
    Какой-то sample текст, чтобы обратить <b>внимание</b> читателя на эту информацию
  </PopupAlert>
);

export const DefaultAlert = GenericAlert.bind({});
