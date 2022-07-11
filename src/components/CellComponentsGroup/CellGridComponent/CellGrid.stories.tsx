import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppContainer } from "../../AppContainer";
import { Link } from "../../LinkComponent";
import { CellComponent, CellProps } from "../CellComponent";
import { NewsletterDataTypes } from "../types";
import { CellGrid } from "./CellGridComponent";

export default {
  title: "Generic/Cells/Cell Grid",
  component: CellGrid,
} as ComponentMeta<typeof CellGrid>;

const dataExample: NewsletterDataTypes[] = [
  {
    id: 0,
    type: "article",
    title: "Тестовое TODO для Mindbox",
    description: "Небольшое приложение со стандартным функционалом и записью всех действий в LocalStorage.",
    date: "15/03/22",
    url: "test-mindbox",
    scheme: {
      size: null,
      level: [1, 2],
      defaultSize: {
        width: 2,
        height: 2,
      },
      desirableSize: [
        {
          width: 2,
          height: 2,
        },
      ],
      minimumSize: [
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
  {
    id: 1,
    type: "article",
    title: "Тестовое в Funbox",
    description: "Небольшое приложение со стандартным функционалом и записью всех действий в LocalStorage.",
    date: "15/03/22",
    url: "test-funbox",
    scheme: {
      size: null,
      level: [1, 2],
      defaultSize: {
        width: 2,
        height: 2,
      },
      desirableSize: [
        {
          width: 2,
          height: 2,
        },
      ],
      minimumSize: [
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
    techStack: ["React", "Typescript"],
    time: 5,
    // image: "test-funbox-preview.jpeg",
  },
  {
    id: 2,
    type: "article",
    title: "Liga Bank",
    url: "liga-bank",
    // будет ограничение по кол-ву слов либо через тег <p> либо обрезать по кол-ву символов по-словно (не резать слова, если не влазит - просто удалять)
    // Проект сделан как верстка одной страницы по макету, дальше додумывался дизайн и сама верстка...
    description:
      "Проект сделан как верстка одной страницы по макету, дальше додумывался дизайн и сама верстка, которая подразумевала собой только первую страницу.",
    date: "15/03/22",
    scheme: {
      size: null,
      level: [1, 2],
      defaultSize: {
        width: 2,
        height: 2,
      },
      desirableSize: [
        {
          width: 2,
          height: 2,
        },
      ],
      minimumSize: [
        {
          width: 2,
          height: 2,
        },
      ],
    },
    techStack: ["React", "Typescript"],
    time: 5,
    // image: "iga-bank-preview.jpeg",
  },
  {
    id: 3,
    title: "Github Stats",
    type: "git",
    gitData: {
      commitsImg: "",
      commitsPerYear: 408,
      commitPersentage: 96,
      pullRequestsPersentage: 4,
    },
    scheme: {
      size: null,
      level: [2],
      defaultSize: {
        width: 2,
        height: 1,
      },
      desirableSize: [
        {
          width: 2,
          height: 1,
        },
      ],
      minimumSize: [
        {
          width: 2,
          height: 1,
        },
      ],
    },
  },
  {
    id: 4,
    title: "Пройденные курсы Udemy",
    type: "lessons",
    borderColor: "#5624D0",
    courses: [
      {
        title: "NodeJS",
        teacher: "Владилен Минин",
        mark: {
          stars: 3.7,
          starsMax: 5,
        },
        completePersantage: 100,
      },
      {
        title: "React с нуля",
        teacher: "Михаил Непомнящий",
        mark: {
          stars: 4,
          starsMax: 5,
        },
        completePersantage: 90,
      },
      {
        title: "Typescript: The Comlete Developer's Guide",
        teacher: "Stephen Grider",
        mark: {
          stars: 4,
          starsMax: 5,
        },
        completePersantage: 75,
      },
      {
        title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        teacher: "Colt Steele, Ian Shoonover",
        mark: {
          stars: 5,
          starsMax: 5,
        },
        completePersantage: 50,
      },
    ],
    scheme: {
      size: null,
      level: [4, 5],
      defaultSize: {
        width: 2,
        height: 2,
      },
      desirableSize: [
        {
          width: 2,
          height: 2,
        },
      ],
      minimumSize: [
        {
          width: 2,
          height: 1,
        },
      ],
    },
  },
  {
    id: 5,
    title: "Пройденные курсы FreeCodeCamp",
    type: "lessons",
    courses: [],
    borderColor: "dark-blue",
    scheme: {
      size: null,
      level: [4],
      defaultSize: {
        width: 2,
        height: 2,
      },
      desirableSize: [
        {
          width: 2,
          height: 2,
        },
      ],
      minimumSize: [
        {
          width: 2,
          height: 1,
        },
      ],
    },
  },
  {
    id: 6,
    title: "Немного о себе",
    type: "bio",
    scheme: {
      size: null,
      level: [7],
      defaultSize: {
        width: 2,
        height: 3,
      },
      desirableSize: [
        {
          width: 2,
          height: 3,
        },
      ],
      minimumSize: [
        {
          width: 2,
          height: 1,
        },
      ],
    },
    // пока что временно ReactNode, а не ReactNode[]
    description: (
      <>
        <p>
          С 2019 года начал изучать базу веб-разработки (HTML, CSS, JS) на SoloLearn и freeCodeCamp. Параллельно начал
          обучаться в КБТ по специальности “Информационные системы и программирование”.
        </p>
        ,
        <p>
          В 2020 году открыл для себя Udemy, купил пару курсов (React от Непомнящего, NodeJS от Минина и пр.) и
          параллельно начал пилить pet-проекты.
        </p>
        ,
        <p>
          В 2021 (примерно) начал изучать TS (Typescript) и постепенно замещать им обыкновенный JS т.к. больше нравится
          синтаксис C#.
        </p>
        ,
        <p>
          С момента начала изучения TS вплоть до сегодняшнего дня полностью перестал использовать ванильный JS и пишу
          приложения (фронт - React и бек - NodeJS+Express) только с типизацией (пока несильной).
        </p>
        ,
      </>
    ),
  },
];

const GenericCellGrid: ComponentStory<typeof CellGrid> = (args) => (
  <AppContainer loaded={true}>
    <CellGrid data={dataExample} />
  </AppContainer>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
