import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./LinkComponent";

export default {
  title: "Links/Default Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const GenericInput: ComponentStory<typeof Link> = () => <Link content='example' link='google.com' />;

export const DefaultInput = GenericInput.bind({});
