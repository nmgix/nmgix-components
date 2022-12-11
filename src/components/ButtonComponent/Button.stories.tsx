import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { AppThemeContainer } from "../AppThemeContainer";
import { Button } from "./Button";

export default {
  title: "Generic/Interactable/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const GenericButton: ComponentStory<typeof Button> = (args) => {
  return (
    <AppThemeContainer loaded={true}>
      <Button {...args}>Default Content</Button>
    </AppThemeContainer>
  );
};

export const DefaultButton = GenericButton.bind({});
DefaultButton.args = {
  border: true,
  children: "Пример текста",
  color: "notification",
  icon: {
    icon: "arrow-right-long",
  },
  opacity: 1,
  size: "m",
};
