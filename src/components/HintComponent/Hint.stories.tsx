import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hint } from "./HintComponent";

export default {
  title: "Generic/Hints/Common",
  component: Hint,
} as ComponentMeta<typeof Hint>;

const GenericHint: ComponentStory<typeof Hint> = (args) => <Hint {...args} />;

export const DefaultHint = GenericHint.bind({});
