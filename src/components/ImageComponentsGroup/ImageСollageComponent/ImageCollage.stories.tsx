import { ImageCollage } from "./ImageCollageComponent";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Generic/Images/Image Collage",
  component: ImageCollage,
} as ComponentMeta<typeof ImageCollage>;

const GenericCollage: ComponentStory<typeof ImageCollage> = (args) => <ImageCollage {...args} />;

export const DefaultCollage = GenericCollage.bind({});

DefaultCollage.args = {
  images: [
    {
      src: "https://avatars.mds.yandex.net/i?id=25de337fb355b3f3308d64e7a2138b2c-5275535-images-thumbs&n=13",
      label: "default label",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=25de337fb355b3f3308d64e7a2138b2c-5275535-images-thumbs&n=13",
      label: "default label",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=25de337fb355b3f3308d64e7a2138b2c-5275535-images-thumbs&n=13",
      label: "default label",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=25de337fb355b3f3308d64e7a2138b2c-5275535-images-thumbs&n=13",
      label: "default label",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=25de337fb355b3f3308d64e7a2138b2c-5275535-images-thumbs&n=13",
      label: "default label",
    },
  ],
};
