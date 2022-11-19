import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { useEffect, useRef } from "react";
import { ThemeWrapper } from "./ThemeWrapper";

export default {
  title: "Generic/ThemeWrapper",
  component: ThemeWrapper,
} as ComponentMeta<typeof ThemeWrapper>;

const GenericThemeWrapper: ComponentStory<typeof ThemeWrapper> = (args) => (
  <ThemeWrapper>
    <div></div>
  </ThemeWrapper>
);

export const DefaultThemeWrapper = GenericThemeWrapper.bind({});
