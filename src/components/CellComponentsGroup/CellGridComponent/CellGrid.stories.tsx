import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppContainer } from "../../AppContainer";
import { Link } from "../../LinkComponent";
import { CellComponent, CellProps } from "../CellComponent";
import { CellGrid } from "./CellGridComponent";

export default {
  title: "Generic/Cells/Cell Grid",
  component: CellGrid,
} as ComponentMeta<typeof CellGrid>;

// const gridData: CellProps[] = [
//   {
//     children: <Link content='пример ссылки в ячейке' link='#' />,
//   },
//   {
//     children: <Link content='пример ссылки в ячейке' link='#' />,
//   },
//   {
//     children: <Link content='пример ссылки в ячейке' link='#' />,
//   },
//   {
//     children: <Link content='пример ссылки в ячейке' link='#' />,
//   },
// ];

const GenericCellGrid: ComponentStory<typeof CellGrid> = (args) => (
  <AppContainer loaded={true}>
    <CellGrid>
      {/* {gridData.map((cellData) => (
        <CellComponent {...cellData} />
      ))} */}
    </CellGrid>
  </AppContainer>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
