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
      src: "https://feminissimo.ru/core/fileman/Uploads/Учимся%20читать%20играя%20Часть3/Азбука%20для%20Детей%20в%20виде%20Карточек/Русский%20Алфавит%20Цветные%20Карточки/cvetnie_kartochki_3.jpg",
      label: "default label",
    },
    {
      src: "https://www.tulapressa.ru/wp-content/images/5da4fbc5a9c684.61334794.jpg",
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
