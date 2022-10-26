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
    id: "1",
    sizes: [
      // {
      //   width: 2,
      //   height: 2,
      // },
      {
        width: 2,
        height: 1,
      },
      {
        width: 2,
        height: 3,
      },
      // {
      //   width: 3,
      //   height: 2,
      // },
    ],
  },
  {
    id: "2",
    sizes: [
      // {
      //   width: 2,
      //   height: 2,
      // },
      {
        width: 2,
        height: 1,
      },
      {
        width: 1,
        height: 2,
      },
      // {
      //   width: 2,
      //   height: 3,
      // },
      // {
      //   width: 3,
      //   height: 2,
      // },
    ],
  },
  {
    id: "3",
    sizes: [
      {
        width: 2,
        height: 3,
      },
    ],
  },
  {
    id: "4",
    sizes: [
      {
        width: 1,
        height: 2,
      },
      {
        width: 2,
        height: 1,
      },
    ],
  },
  {
    id: "5",
    sizes: [
      {
        width: 1,
        height: 2,
      },
      {
        width: 2,
        height: 1,
      },
    ],
  },
  {
    id: "6",
    sizes: [
      {
        width: 2,
        height: 2,
      },
      {
        width: 2,
        height: 3,
      },
      {
        width: 1,
        height: 3,
      },
      {
        width: 3,
        height: 1,
      },
    ],
  },
  {
    id: "7",
    sizes: [
      {
        width: 2,
        height: 1,
      },
      {
        width: 2,
        height: 2,
      },
    ],
  },
  {
    id: "8",
    sizes: [
      {
        width: 1,
        height: 2,
      },
    ],
  },
  {
    id: "9",
    sizes: [
      {
        width: 2,
        height: 2,
      },
    ],
  },
  {
    id: "10",
    sizes: [
      {
        width: 2,
        height: 2,
      },
      {
        width: 2,
        height: 1,
      },
      {
        width: 1,
        height: 2,
      },
    ],
  },
  {
    id: "11",
    sizes: [
      {
        width: 1,
        height: 2,
      },
      {
        width: 2,
        height: 3,
      },
    ],
  },
  {
    id: "12",
    sizes: [
      {
        width: 1,
        height: 1,
      },
    ],
  },
  // {
  //   id: "13",
  //   sizes: [
  //     {
  //       width: 1,
  //       height: 1,
  //     },
  //   ],
  // },
  // {
  //   id: "14",
  //   sizes: [
  //     {
  //       width: 1,
  //       height: 1,
  //     },
  //   ],
  // },
  // {
  //   id: "15",
  //   sizes: [
  //     {
  //       width: 1,
  //       height: 1,
  //     },
  //   ],
  // },
];

const GenericCellGrid: ComponentStory<typeof CellGroup> = (args) => (
  <AppContainer loaded={true}>
    {/* <Cell {...{ ...({} as GitData), type: "git" }} /> */}
    {/* <Cell {...{ ...({} as ArticleData), type: "article" }} /> */}
    <CellGroup data={mockData} />
  </AppContainer>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
