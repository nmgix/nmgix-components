import React, { useEffect, useState } from "react";
import { CellComponent } from "../CellComponent";
import { NewsletterDataTypes, Scheme } from "../types";
import { Cell } from "../types";
import "./_cellGrid.scss";

type CellGridProps = {
  children: React.ReactNode;
};

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
      level: [1],
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
    image: "test-mindbox-preview.jpeg",
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
      level: [1],
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
    image: "test-funbox-preview.jpeg",
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
    image: "iga-bank-preview.jpeg",
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
      level: [2, 3, 4],
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
  // {
  //   id: 5,
  //   title: "Пройденные курсы FreeCodeCamp",
  //   type: 'lessons',
  //   courses: [
  //     {

  //     }
  //   ],
  //   scheme: {
  //     size: null,
  //     level: [2, 3, 4],
  //     defaultSize: {
  //       width: 2,
  //       height: 2,
  //     },
  //     desirableSize: [
  //       {
  //         width: 2,
  //         height: 2,
  //       },
  //     ],
  //     minimumSize: [
  //       {
  //         width: 2,
  //         height: 1,
  //       },
  //     ],
  //   },
  // },
  {
    id: 6,
    title: "Немного о себе",
    type: "bio",
    scheme: {
      size: null,
      level: [2, 3, 4, 5],
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
  // const GridGenerator = (dataArray: NewsletterDataTypes[]) => {
  //   var currentScheme: SetupScheme[] = [];

  //   const firstIteration = (schemes: NewsletterDataTypes[]): SetupScheme[] => {
  //     var sortedData = schemes.sort((scheme1, scheme2) => {
  //       var firstValue =
  //         typeof scheme1.scheme.level === "number" ? scheme1.scheme.level : Math.max(...scheme1.scheme.level);
  //       var secondValue =
  //         typeof scheme2.scheme.level === "number" ? scheme2.scheme.level : Math.max(...scheme2.scheme.level);

  //       return firstValue - secondValue;
  //     });

  //     return sortedData.map((data) => {
  //       return { id: data.id, size: data.scheme.defaultSize, scheme: data.scheme };
  //     });
  //   };

  //   currentScheme = firstIteration(dataArray);

  //   const secondIteration = (schemes: SetupScheme[]): SetupScheme[] => {
  //     var horizontalPerRowLimit = 4;
  //     var verticalPerLevelLimit = 2;

  //     // массив массивов элементов, разделенных на уровень с индекса 0
  //     var levelSeparated: SetupScheme[][] = [];
  //     var desireMap: number[];

  //     // получить максимальное значение уровня у элемента (бывает массив, например [2,3,4,5])
  //     const getMaxLevel = (currentScheme: SetupScheme) =>
  //       typeof currentScheme.scheme.level === "number"
  //         ? (currentScheme.scheme.level as number)
  //         : Math.max(...(currentScheme.scheme.level as number[]));

  //     // цикл 2^n для сортировки элементов по уровням
  //     for (var i = 0; i <= getMaxLevel(schemes[schemes.length - 1]) - 1; i++) {
  //       var levelArray: SetupScheme[] = [];

  //       for (var j = 0; j < schemes.length; j++) {
  //         var level = getMaxLevel(schemes[j]);
  //         if (level - 1 === i) {
  //           levelArray.push(schemes[j]);
  //         }
  //       }

  //       levelSeparated.push(levelArray);
  //       continue;
  //     }

  //     // чтобы убрать пустые уровни
  //     // console.log("levelSeparated before sorting", levelSeparated);
  //     levelSeparated = levelSeparated.filter((array) => array.length > 0);
  //     // console.log("levelSeparated after sorting", levelSeparated);

  //     function randomIntFromInterval(min: number, max: number) {
  //       // min and max included
  //       return Math.floor(Math.random() * (max - min + 1) + min);
  //     }

  //     // карта приоритетов по расширение или уменьшению, если у двух блоков
  //     // стоит одинаковое число, приоритет будет у второго блока, первый будет уменьшаться, наверное
  //     desireMap = levelSeparated.map(() => randomIntFromInterval(0, 1));

  //     // console.log(desireMap);
  //     // console.log(levelSeparated);

  //     const getTotalCells = (arrays: SetupScheme[][]) => {
  //       return arrays.map((array) => {
  //         return array.reduce((acc, curr) => acc + curr.size.width * curr.size.height, 0);
  //       });
  //     };
  //     var totalCells = getTotalCells(levelSeparated);

  //     // логика по настройке массива, установке правильных размеров
  //     const balanceLevels = (schemes: SetupScheme[][]) => {
  //       schemes = schemes.map((levelArray, i) => {
  //         let localTotalCells = totalCells[i];

  //         if (localTotalCells > horizontalPerRowLimit * verticalPerLevelLimit) {
  //           if (i !== 0) {
  //             // если предыдущий лвл имеет большинство
  //             if (desireMap[i - 1] == 1) {
  //               // меньшинство
  //               levelArray = levelArray.map((levelScheme) => {
  //                 levelScheme.size = levelScheme.scheme.desirableSize.find((size) => size.width > 1)!;
  //                 return levelScheme;
  //               });
  //             } else {
  //               // большинство
  //               levelArray = levelArray.map((levelScheme) => {
  //                 levelScheme.size = levelScheme.scheme.minimumSize.find((size) => size.width > 1)!;
  //                 return levelScheme;
  //               });
  //             }
  //           } else {
  //             // если первый лвл из всех, то если в меньшинство
  //             if (desireMap[i] == 0) {
  //               levelArray = levelArray.map((levelScheme) => {
  //                 levelScheme.size = levelScheme.scheme.minimumSize.find((size) => size.width > 1)!;
  //                 return levelScheme;
  //               });
  //             } else {
  //               // если в большинство
  //               levelArray = levelArray.map((levelScheme) => {
  //                 levelScheme.size = levelScheme.scheme.desirableSize.find((size) => size.width > 1)!;
  //                 return levelScheme;
  //               });
  //             }
  //           }
  //           // логика по сжатию или удалению элементов если не влазят,
  //           // не удаление если в его месте есть пустое пространство,
  //           // надо будет разбираться где он выпирает и влазит ли это в другой уровень
  //         } else {
  //           // это если клеток общее кол-во меньше чем лимит
  //           if (desireMap[i] == 0) {
  //             levelArray = levelArray.map((levelScheme) => {
  //               levelScheme.size = levelScheme.scheme.minimumSize.find((size) => size.width > 1)!;
  //               return levelScheme;
  //             });
  //           } else {
  //             levelArray = levelArray.map((levelScheme) => {
  //               levelScheme.size = levelScheme.scheme.desirableSize.find((size) => size.width > 1)!;
  //               return levelScheme;
  //             });
  //           }
  //         }

  //         return levelArray;
  //       });

  //       var totalLevelSum = totalCells.length * (horizontalPerRowLimit * verticalPerLevelLimit);
  //       if (totalLevelSum > totalCells.reduce((acc, cur) => acc + cur, 0)) {
  //         // пытаться расширить элементы
  //       } else {
  //         // пытаться уменьшить и скомпоновать
  //       }

  //       // if(totalCells > horizontalPerRowLimit * verticalPerLevelLimit){
  //       //   balanceLevels(schemes)
  //       // }
  //       return schemes;
  //     };

  //     // вызов логики расстановки размеров
  //     balanceLevels(levelSeparated);

  //     // флат всех лволов в один большой массив, мб чтобы третйи шаг делать, этот двойной массив
  //     // как раз и будет основным, с лвлами, а общий flat будет в самом конце
  //     return levelSeparated.flat();
  //   };

  //   currentScheme = secondIteration(currentScheme);
  //   console.log("after second iteration ", currentScheme);
  //   // можно будет вызывать эту функцию чтобы попробовать сделать другую схему и принять её если она не равна предыдущей

  //   // // в первой итерации идёт распределение какие данные на какой уровень идут, какие на первый, какие на второй и пр.
  //   // // в первой итерации всем дефолтное для них пространство, дальше уже будет исходить из правил по схеме
  //   // во второй итерации элементы, которые не влазили на свой уровень будут пытаться объединиться с элементами своего уровня (2 2х2 будут пытаться в 2 2х1 или 2 1х2)
  //   // во второй итерации будет так же попытка расставить элементы в их desirable размерах
  //   //(приоритет на большие или приоритет будет рандомный для лволов
  //   //(у каждого лвла приоритет сверху и снизу, т.е. между первым и вторым приоритет на маленькие элементы чтобы особо не пересекались, а у второго с третьим на большие))
  //   // третий шаг (мб и второй) скорее всего будут рекурсивные но с лимитом (который с каждой рекурсией добавляется)
  //   // и мб результат этой функции будет в Next сохраняться и выдаваться статикой какое-то время чтобы не жрать мощности железа
  // };

  const [renderScheme, setRenderScheme] = useState<NewsletterDataTypes[]>([]);

  const GridGenerator = (dataArray: NewsletterDataTypes[]) => {};

  useEffect(() => {
    GridGenerator(dataExample);
  }, []);

  return (
    <div className='cell-grid'>
      {renderScheme.map((scheme) => (
        <CellComponent data={scheme} key={scheme.id} />
      ))}
    </div>
  );
};
