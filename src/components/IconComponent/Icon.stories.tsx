import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./IconComponent";

export default {
  title: "Generic/Uncommon/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const GenericIcon: ComponentStory<typeof Icon> = () => <Icon />;

export const DefaultIcon = GenericIcon.bind({});
