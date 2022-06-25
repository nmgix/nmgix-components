import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "./LinkComponent";

export default {
  title: "Generic/Interactable/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const GenericLink: ComponentStory<typeof Link> = () => <Link content='example' link='google.com' />;

export const DefaultLink = GenericLink.bind({});
