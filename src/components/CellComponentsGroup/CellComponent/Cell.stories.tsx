import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "../../LinkComponent";
import { Cell } from "./CellComponent";

export default {
  title: "Generic/Cells/Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

const GenericCell: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const DefaultCell = GenericCell.bind({});

DefaultCell.args = {
  children: <Link content='пример ссылки в ячейке' link='#' />,
};
