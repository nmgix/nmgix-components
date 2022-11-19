import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppThemeContainer } from "../AppThemeContainer";
import { dataExample } from "./example-data/ExampleData";
import { CellGroup } from "./CellGroup/CellGroup";
import React from "react";

export default {
  title: "Generic/Uncommon/Cells",
  component: CellGroup,
} as ComponentMeta<typeof CellGroup>;

const GenericCellGrid: ComponentStory<typeof CellGroup> = (args) => (
  <AppThemeContainer loaded={true}>
    <CellGroup data={dataExample} />
  </AppThemeContainer>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
