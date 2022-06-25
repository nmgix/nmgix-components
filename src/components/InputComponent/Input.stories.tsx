import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./InputComponent";

export default {
  title: "Generic/Interactable/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const GenericInput: ComponentStory<typeof Input> = () => <Input label='Тестовый Label' />;

export const DefaultInput = GenericInput.bind({});
