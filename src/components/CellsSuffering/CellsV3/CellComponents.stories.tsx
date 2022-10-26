import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppContainer } from "../../AppContainer";
// import { CellGrid } from "../CellComponentsGroup";
import { ArticleData, BioData, GitData, NewsletterDataTypes } from "../CellComponentsGroup/types";
import { CellGroup, DataSize } from "./CellGroup/CellGroup";
// import { Cell } from "./Cell/cell";

export default {
  title: "test-cells-V3",
  component: CellGroup,
} as ComponentMeta<typeof CellGroup>;

const mockData: DataSize[] = [
  {
    sizes: [
      {
        id: "1",
        width: 2,
        height: 2,
      },
      {
        id: "1",
        width: 2,
        height: 1,
      },
      {
        id: "1",
        width: 2,
        height: 3,
      },
    ],
  },
  {
    sizes: [
      {
        id: "2",
        width: 2,
        height: 2,
      },
      {
        id: "2",
        width: 2,
        height: 1,
      },
      {
        id: "2",
        width: 2,
        height: 3,
      },
    ],
  },
  {
    sizes: [
      {
        id: "3",
        width: 2,
        height: 3,
      },
    ],
  },
  {
    sizes: [
      {
        id: "4",
        width: 1,
        height: 2,
      },
    ],
  },
  {
    sizes: [
      {
        id: "5",
        width: 1,
        height: 2,
      },
    ],
  },
  {
    sizes: [
      {
        id: "6",
        width: 2,
        height: 2,
      },
    ],
  },
  {
    sizes: [
      {
        id: "7",
        width: 2,
        height: 1,
      },
    ],
  },
  {
    sizes: [
      {
        id: "8",
        width: 1,
        height: 2,
      },
    ],
  },
  {
    sizes: [
      {
        id: "9",
        width: 2,
        height: 2,
      },
    ],
  },
  {
    sizes: [
      {
        id: "10",
        width: 2,
        height: 2,
      },
    ],
  },
  {
    sizes: [
      {
        id: "11",
        width: 1,
        height: 2,
      },
    ],
  },
];

const GenericCellGrid: ComponentStory<typeof CellGroup> = (args) => (
  <AppContainer loaded={true}>
    {/* <Cell {...{ ...({} as GitData), type: "git" }} /> */}
    {/* <Cell {...{ ...({} as ArticleData), type: "article" }} /> */}
    <CellGroup data={mockData} />
  </AppContainer>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
