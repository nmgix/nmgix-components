import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HintsWrapper } from "./HintsWrapperComponent";

export default {
  title: "Generic/Hints/Hints Wrapper",
  component: HintsWrapper,
} as ComponentMeta<typeof HintsWrapper>;

const GenericHintsWrapper: ComponentStory<typeof HintsWrapper> = (args) => <HintsWrapper {...args} />;

export const DefaultHintsWrapper = GenericHintsWrapper.bind({});

DefaultHintsWrapper.args = {
  hints: [
    {
      id: "hint1",
      content: {
        title: "Подсветка текущего блока",
        description:
          "Рассчитывая текущее положение текста, если он находится примерно в середине экрана, он подсвечивается чтобы держать фокус",
      },
      hideTimeout: 0,
      switchOption: () => console.log("switched some option state"),
      type: "absolute",
    },
    {
      id: "hint2",
      content: {
        title: "Другая информация",
        description:
          "Рассчитывая текущее положение текста, если он находится примерно в середине экрана, он подсвечивается чтобы держать фокус",
      },
      hideTimeout: 0,
      switchOption: () => console.log("switched some option state"),
      type: "absolute",
    },
  ],
  // content: {
  //   title: "Подсветка текущего блока",
  //   description:
  //     "Рассчитывая текущее положение текста, если он находится примерно в середине экрана, он подсвечивается чтобы держать фокус",
  // },
  // hideTimeout: 10000,
  // switchOption: () => console.log("switched some option state"),
};
