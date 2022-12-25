import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hint } from "./HintComponent";

export default {
  title: "Generic/Hints/Hint",
  component: Hint,
} as ComponentMeta<typeof Hint>;

const GenericHint: ComponentStory<typeof Hint> = (args) => <Hint {...args} />;

export const DefaultHint = GenericHint.bind({});

DefaultHint.args = {
  content: {
    title: "Подсветка текущего блока",
    description:
      "Рассчитывая текущее положение текста, если он находится примерно в середине экрана, он подсвечивается чтобы держать фокус",
  },
  hideTimeout: 10000,
  switchOption: () => console.log("switched some option state"),
  type: "fixed",
};
