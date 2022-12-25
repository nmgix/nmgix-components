import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Generic/Interactable/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const GenericButton: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Default Content</Button>;
};

export const DefaultButton = GenericButton.bind({});
DefaultButton.args = {
  buttonBorder: true,
  children: "Пример текста",
  color: "notification",
  opacity: 1,
  size: "m",
};
