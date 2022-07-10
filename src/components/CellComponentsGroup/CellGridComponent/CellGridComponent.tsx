import React, { useEffect, useState } from "react";
import { CellComponent } from "../CellComponent";
import { getRandomInt, matrix } from "../helpers";
import { NewsletterDataTypes, ReverseShift, Scheme } from "../types";
import { Cell } from "../types";
import "../_cell.scss";

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

export const CellGrid: React.FC<CellGridProps> = ({ children }) => {
  const [renderScheme, setRenderScheme] = useState<[NewsletterDataTypes[], string]>([[], ""]);

  const GridGenerator = (dataArray: NewsletterDataTypes[]): [NewsletterDataTypes[], string] => {
    var result: NewsletterDataTypes[] = dataArray;
    var notFitted: NewsletterDataTypes[] = [];

    result = result.map((data) => {
      var index = getRandomInt(0, data.scheme.level.length - 1);
      data.scheme.level = data.scheme.level.length < 2 ? [data.scheme.level.at(0)!] : [data.scheme.level.at(index)!];
      return data;
    });

    result = result.sort((data1, data2) => data1.scheme.level.at(0)! - data2.scheme.level.at(0)!);

    var reverseShifts: ReverseShift[] = [];

    for (var j = 1; j < result[result.length - 1].scheme.level[0] + 1; j++) {
      var foundDataWithLevel = result.filter((data) => data.scheme.level[0] === j);
      if (foundDataWithLevel.length === 0) {
        var actualReverseShift = reverseShifts.find((shift) => shift.level === j || shift.level === j - 1);
        if (actualReverseShift) {
          actualReverseShift.shiftAmount = actualReverseShift.shiftAmount + 1;
        } else {
          var newReverseShift: ReverseShift = {
            level: j,
            shiftAmount: 1,
          };
          reverseShifts.push(newReverseShift);
        }
      } else {
        continue;
      }
    }

    var totalShift = 0;

    result = result.map((data, i) => {
      var foundShift = reverseShifts.find((shift, i) => data.scheme.level[0] >= shift.level);
      if (foundShift) {
        reverseShifts = reverseShifts.filter((shift) => shift !== foundShift);
      }
      if (foundShift) {
        totalShift = totalShift + foundShift.shiftAmount;
      }
      data.scheme.level[0] = data.scheme.level[0] - totalShift;

      return data;
    });

    const handleSize = (array: NewsletterDataTypes[]): NewsletterDataTypes[] => {
      array = array.map((data) => {
        var minMax = getRandomInt(0, 1);
        data.scheme.size =
          minMax === 0
            ? data.scheme.minimumSize[getRandomInt(0, data.scheme.minimumSize.length - 1)]
            : data.scheme.desirableSize[getRandomInt(0, data.scheme.desirableSize.length - 1)];
        return data;
      });

      return array;
    };
    result = handleSize(result);

    var cellsHeightPerLevel = 2;
    // var allElementsHeightSum = result.reduce((acc, curr) => acc + curr.scheme.size!.height, 0);
    var maxLevel = result[result.length - 1].scheme.level[0] * cellsHeightPerLevel;
    var gridTemplateResult: string[][] = matrix(4, maxLevel, ".");
    var notFitted: NewsletterDataTypes[] = [];

    const findAndSet = (id: string, data: NewsletterDataTypes, row: number = 0) => {
      var targetColumn: null | number = null;

      const recoursiveFind = () => {
        console.log("called", `targetColumn ${targetColumn}`);
        if (
          row > data.scheme.level[0] * cellsHeightPerLevel + data.scheme.size!.height ||
          gridTemplateResult[row] === undefined
        ) {
          // console.log("не нашёл место");
          notFitted.push(data);
          return false;
        }
        // console.log("running");

        // если нет целевого стратового индекса в строке
        if (targetColumn === null) {
          // в строке ищем свободное поле
          for (var i = 0; i < gridTemplateResult[row].length; i++) {
            // если поле пустое И индекс-1 + ширина объекта (минус за счёт того, что за его место встанет объект) меньше ширины строки
            if (
              gridTemplateResult[row][i] === "." &&
              i - 1 + data.scheme.size!.width < gridTemplateResult[row].length
            ) {
              targetColumn = i;
              break;
            } else {
              continue;
            }
          }

          // если не нашли свободное поле, ищем на строке ниже
          if (targetColumn === null) {
            // console.log("если не нашли свободное поле, ищем на строке ниже");
            row++;
          }
          recoursiveFind();
        } else {
          // если есть индекс старта

          for (var i = 0; i < data.scheme.size!.height; i++) {
            for (var j = 0; j < data.scheme.size!.width; j++) {
              gridTemplateResult[row + i][targetColumn + j] = id;
            }
          }

          console.log(gridTemplateResult);

          return true;
        }
      };
      recoursiveFind();
    };

    // установка элементов
    result.map((data) => {
      findAndSet(`cell-${data.id}`, data, data.scheme.level[0] - 1);
    });

    return [result, "'" + gridTemplateResult.map((arr) => arr.join(" ")).join("' '") + "'"];
  };

  useEffect(() => {
    setRenderScheme(GridGenerator(dataExample));
  }, []);

  return (
    <ul className='cell-grid' style={{ gridTemplateAreas: renderScheme[1] }}>
      {renderScheme[0].map((scheme) => (
        <CellComponent data={scheme} key={scheme.id} />
      ))}
    </ul>
  );
};
