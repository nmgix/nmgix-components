import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Generic/Interactable/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const GenericButton: ComponentStory<typeof Button> = () => <Button>Default Content</Button>;

export const DefaultButton = GenericButton.bind({});
