import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppContainer } from "../AppContainer";
import { Button } from "./Button";

export default {
  title: "Generic/Interactable/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const GenericButton: ComponentStory<typeof Button> = (args) => {
  return (
    <AppContainer loaded={true}>
      <Button {...args}>Default Content</Button>
    </AppContainer>
  );
};

export const DefaultButton = GenericButton.bind({});
DefaultButton.args = {
  border: true,
  children: "Пример текста",
  color: "notification",
  icon: {
    exists: true,
    icon: "arrow-right-long",
  },
  opacity: 1,
  size: "m",
};
