import { NewsletterDataTypes } from "../types";

export const dataExample: NewsletterDataTypes[] = [
  {
    id: 0,
    type: "article",
    title: "Тестовое TODO для Mindbox",
    description: "Небольшое приложение со стандартным функционалом и записью всех действий в LocalStorage.",
    date: "15/03/22",
    url: "test-mindbox",
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
    sizes: [
      {
        width: 4,
        height: 2,
      },
    ],
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
    sizes: [
      {
        width: 2,
        height: 1,
      },
      {
        width: 2,
        height: 3,
      },
    ],
    techStack: ["React", "Typescript"],
    time: 5,
    // image: "iga-bank-preview.jpeg",
  },
  {
    id: 3,
    title: "Github Stats",
    type: "git",
    gitData: {
      commitsImg: "../example-data/github-example.png",
      issuesPersentage: 0,
      commitsPerYear: 408,
      codeReviewPersentage: 0,
      pullRequestsPersentage: 4,
    },
    sizes: [
      {
        width: 2,
        height: 1,
      },
    ],
  },
  {
    id: 4,
    title: "Пройденные курсы Udemy",
    type: "courses",
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
    sizes: [
      {
        width: 1,
        height: 2,
      },
    ],
  },
  {
    id: 5,
    title: "Пройденные курсы FreeCodeCamp",
    type: "courses",
    courses: [],
    borderColor: "dark-blue",
    sizes: [
      {
        width: 1,
        height: 2,
      },
    ],
  },
  {
    id: 6,
    title: "Немного о себе",
    type: "bio",
    sizes: [
      {
        width: 2,
        height: 3,
      },
    ],
    // пока что временно ReactNode, а не ReactNode[]
    description: (
      <div className='cell-type-bio-content'>
        <h3>Немного о себе</h3>
        <p>
          С 2019 года начал изучать базу веб-разработки (HTML, CSS, JS) на SoloLearn и freeCodeCamp. Параллельно начал
          обучаться в КБТ по специальности “Информационные системы и программирование”.
        </p>
        <p>
          В 2020 году открыл для себя Udemy, купил пару курсов (React от Непомнящего, NodeJS от Минина и пр.) и
          параллельно начал пилить pet-проекты.
        </p>
        <p>
          В 2021 (примерно) начал изучать TS (Typescript) и постепенно замещать им обыкновенный JS т.к. больше нравится
          синтаксис C#.
        </p>
        <p>
          С момента начала изучения TS вплоть до сегодняшнего дня полностью перестал использовать ванильный JS и пишу
          приложения (фронт - React и бек - NodeJS+Express) только с типизацией (пока несильной).
        </p>
      </div>
    ),
  },
];
