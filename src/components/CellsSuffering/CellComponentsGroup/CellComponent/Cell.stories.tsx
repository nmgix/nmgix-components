import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "../../../LinkComponent";
import { CellComponent } from "./CellComponent";

export default {
  title: "Generic/Cells/Cell",
  component: CellComponent,
} as ComponentMeta<typeof CellComponent>;

const GenericCell: ComponentStory<typeof CellComponent> = (args) => <CellComponent {...args} />;

export const DefaultCell = GenericCell.bind({});

DefaultCell.args = {
  // children: <Link content='пример ссылки в ячейке' link='#' />,
  data: {
    id: 0,
    type: "article",
    title: "Тестовое TODO для Mindbox",
    description: "Небольшое приложение со стандартным функционалом и записью всех действий в LocalStorage.",
    date: "15/03/22",
    url: "test-mindbox",
    scheme: {
      size: { width: 2, height: 2 },
      level: [1, 2],
      defaultSize: {
        width: 2,
        height: 2,
      },
      maxSize: [
        {
          width: 2,
          height: 2,
        },
      ],
      minSize: [
        {
          width: 2,
          height: 2,
        },
      ],
    },
    techStack: ["React", "Typescript", "Local Storage"],
    time: 5,
    // image: "test-mindbox-preview.jpeg",
  },
};
