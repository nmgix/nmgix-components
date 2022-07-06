import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "../../LinkComponent";
import { CellComponent } from "./CellComponent";

export default {
  title: "Generic/Cells/Cell",
  component: CellComponent,
} as ComponentMeta<typeof CellComponent>;

const GenericCell: ComponentStory<typeof CellComponent> = (args) => <CellComponent {...args} />;

export const DefaultCell = GenericCell.bind({});

DefaultCell.args = {
  children: <Link content='пример ссылки в ячейке' link='#' />,
};
