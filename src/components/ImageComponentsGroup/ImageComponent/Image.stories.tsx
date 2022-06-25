import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./ImageComponent";

export default {
  title: "Generic/Images/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const GenericImage: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const DefaultImage = GenericImage.bind({});
