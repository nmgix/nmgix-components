import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./ImageComponent";

export default {
  title: "Generic/Images/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const GenericImage: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const DefaultImage = GenericImage.bind({});

DefaultImage.args = {
  label: "default label",
  showLabel: false,
  src: "https://avatars.mds.yandex.net/i?id=25de337fb355b3f3308d64e7a2138b2c-5275535-images-thumbs&n=13",
};
