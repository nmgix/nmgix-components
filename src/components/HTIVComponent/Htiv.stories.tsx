import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HTIV } from "./HTIVComponent";

export default {
  title: "Generic/Uncommon/HTIV",
  component: HTIV,
} as ComponentMeta<typeof HTIV>;

const GenericHTIV: ComponentStory<typeof HTIV> = () => (
  <HTIV>
    <p>Какой-то текст1</p>
    <p>Какой-то текст2</p>
    <p>Какой-то текст3</p>
    <p>Какой-то текст4</p>
    <p>Какой-то текст5</p>
  </HTIV>
);

export const DefaultHTIV = GenericHTIV.bind({});
