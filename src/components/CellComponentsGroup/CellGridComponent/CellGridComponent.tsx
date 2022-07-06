import React, { useEffect } from "react";
import { NewsletterDataTypes, Scheme } from "../types";
import "./_cellGrid.scss";

type CellGridProps = {
  children: React.ReactNode;
};

const dataExample: NewsletterDataTypes[] = [
  {
    id: 0,
    title: "Тестовое TODO для Mindbox",
    description: "Небольшое приложение со стандартным функционалом и записью всех действий в LocalStorage.",
    date: "15/03/22",
    url: "test-mindbox",
    scheme: {
      level: 1,
      defaultSize: "2x2",
      minimumSize: "2x2",
      desirableSize: "2x2",
    },
    techStack: ["React", "Typescript", "Local Storage"],
    time: 5,
    image: "test-mindbox-preview.jpeg",
  },
  {
    id: 1,
    title: "Тестовое в Funbox",
    description: "Небольшое приложение со стандартным функционалом и записью всех действий в LocalStorage.",
    date: "15/03/22",
    url: "test-funbox",
    scheme: {
      level: 1,
      defaultSize: "2x2",
      desirableSize: "2x2",
      minimumSize: ["1x2", "2x1"],
    },
    techStack: ["React", "Typescript"],
    time: 5,
    image: "test-funbox-preview.jpeg",
  },
  {
    id: 2,
    title: "Liga Bank",
    url: "liga-bank",
    // будет ограничение по кол-ву слов либо через тег <p> либо обрезать по кол-ву символов по-словно (не резать слова, если не влазит - просто удалять)
    // Проект сделан как верстка одной страницы по макету, дальше додумывался дизайн и сама верстка...
    description:
      "Проект сделан как верстка одной страницы по макету, дальше додумывался дизайн и сама верстка, которая подразумевала собой только первую страницу.",
    date: "15/03/22",
    scheme: {
      level: [1, 2],
      defaultSize: "2x2",
      desirableSize: "2x2",
      minimumSize: "2x2",
    },
    techStack: ["React", "Typescript"],
    time: 5,
    image: "iga-bank-preview.jpeg",
  },
  {
    id: 3,
    title: "Github Stats",
    extraOrdinaryRenderHandler: "github-stats",
    scheme: {
      level: 2,
      defaultSize: "2x1",
      desirableSize: "2x1",
      minimumSize: "2x1",
    },
  },
  {
    id: 4,
    title: "Пройденные курсы Udemy",
    extraOrdinaryRenderHandler: "udemy-stats",
    scheme: {
      level: [2, 3, 4],
      defaultSize: "2x2",
      desirableSize: "2x2",
      minimumSize: "2x1",
    },
  },
  {
    id: 5,
    title: "Пройденные курсы FreeCodeCamp",
    extraOrdinaryRenderHandler: "freecodecamp-stats",
    scheme: {
      level: [2, 3, 4],
      defaultSize: "2x2",
      desirableSize: "2x2",
      minimumSize: "2x1",
    },
  },
  {
    id: 6,
    title: "Немного о себе",
    extraOrdinaryRenderHandler: "about-yourself",
    scheme: {
      level: [2, 3, 4, 5],
      defaultSize: "2x2",
      desirableSize: "2x3",
      minimumSize: "2x2",
    },
    description: [
      <p>
        С 2019 года начал изучать базу веб-разработки (HTML, CSS, JS) на SoloLearn и freeCodeCamp. Параллельно начал
        обучаться в КБТ по специальности “Информационные системы и программирование”.
      </p>,
      <p>
        В 2020 году открыл для себя Udemy, купил пару курсов (React от Непомнящего, NodeJS от Минина и пр.) и
        параллельно начал пилить pet-проекты.
      </p>,
      <p>
        В 2021 (примерно) начал изучать TS (Typescript) и постепенно замещать им обыкновенный JS т.к. больше нравится
        синтаксис C#.
      </p>,
      <p>
        С момента начала изучения TS вплоть до сегодняшнего дня полностью перестал использовать ванильный JS и пишу
        приложения (фронт - React и бек - NodeJS+Express) только с типизацией (пока несильной).
      </p>,
    ],
  },
];

export const CellGrid: React.FC<CellGridProps> = ({ children }) => {
  const GridGenerator = (dataArray: NewsletterDataTypes[]) => {
    var currentScheme: NewsletterDataTypes[] = [];
    console.log(dataArray);

    const firstIteration = (schemes: NewsletterDataTypes[]) => {
      var sortedData = schemes.sort((scheme1, scheme2) => {
        var firstValue =
          typeof scheme1.scheme.level === "number" ? scheme1.scheme.level : Math.max(...scheme1.scheme.level);
        var secondValue =
          typeof scheme2.scheme.level === "number" ? scheme2.scheme.level : Math.max(...scheme2.scheme.level);

        return firstValue - secondValue;
      });

      var horizontalPerRowLimit = 4;
      var verticalPerLevelLimit = 2;

      return sortedData;
    };

    currentScheme = firstIteration(dataArray);
    console.log(dataArray);
    // можно будет вызывать эту функцию чтобы попробовать сделать другую схему и принять её если она не равна предыдущей

    // в первой итерации идёт распределение какие данные на какой уровень идут, какие на первый, какие на второй и пр.
    // в первой итерации всем дефолтное для них пространство, дальше уже будет исходить из правил по схеме
    // во второй итерации элементы, которые не влазили на свой уровень будут пытаться объединиться с элементами своего уровня (2 2х2 будут пытаться в 2 2х1 или 2 1х2)
    // во второй итерации будет так же попытка расставить элементы в их desirable размерах
    //(приоритет на большие или приоритет будет рандомный для лволов
    //(у каждого лвла приоритет сверху и снизу, т.е. между первым и вторым приоритет на маленькие элементы чтобы особо не пересекались, а у второго с третьим на большие))
    // третий шаг (мб и второй) скорее всего будут рекурсивные но с лимитом (который с каждой рекурсией добавляется)
    // и мб результат этой функции будет в Next сохраняться и выдаваться статикой какое-то время чтобы не жрать мощности железа
  };

  useEffect(() => {
    GridGenerator(dataExample);
  }, []);

  return <div>{children}</div>;
};
