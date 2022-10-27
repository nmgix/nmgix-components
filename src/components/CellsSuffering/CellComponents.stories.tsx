import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppContainer } from "../AppContainer";
import { dataExample } from "./example-data/ExampleData";
import { CellGroup } from "./CellGroup/CellGroup";

export default {
  title: "test-cells-V3",
  component: CellGroup,
} as ComponentMeta<typeof CellGroup>;

const GenericCellGrid: ComponentStory<typeof CellGroup> = (args) => (
  <AppContainer loaded={true}>
    <CellGroup data={dataExample} />
  </AppContainer>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
