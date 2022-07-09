import React, { useEffect, useState } from "react";
import { CellComponent } from "../CellComponent";
import { getRandomInt } from "../helpers";
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

    // рандомное выставление уровней элементам где level - массив, если число одно, оно и останется, иначе рандомное
    result = result.map((data) => {
      data.scheme.level =
        data.scheme.level.length < 2
          ? [data.scheme.level.at(0)!]
          : [data.scheme.level.at(getRandomInt(0, data.scheme.level.length - 1))!];
      return data;
    });

    // // если есть пропущенные лвлы
    var reverseShifts: ReverseShift[] = [];

    // пробегается по уровням от 0 вкл до условно 7 невкл
    for (var j = 0; j < result[result.length - 1].scheme.level[0]; j++) {
      // ищет все элементы с текущем уровнем (zero-based, а level нет, так что  +1)
      var foundDataWithLevel = result.filter((data) => data.scheme.level[0] === j + 1);
      // если длинна массива 0, т.е. текущего уровня (индекс + 1 из-за лвла) нет
      if (foundDataWithLevel.length === 0) {
        //                                            если индекс в массиве равен индексу цикла +1 (лвл) или
        //                                                           просто индексу (прошлому лвлу)
        var actualReverseShift = reverseShifts.find((shift) => shift.index === j + 1 || shift.index === j);
        if (actualReverseShift) {
          actualReverseShift.shiftAmount = actualReverseShift.shiftAmount + 1;
        } else {
          var newReverseShift: ReverseShift = {
            index: j + 1,
            shiftAmount: 1,
          };
          reverseShifts.push(newReverseShift);
        }
      } else {
        continue;
      }
    }
    console.log(reverseShifts);

    // сортировка по уровням, градация
    result = result.sort((data1, data2) => data1.scheme.level.at(0)! - data2.scheme.level.at(0)!);
    console.log(result);

    // после уменьшения лвлов при появлении новой дыры (следующего объекта в reverseShifts, будет добавлять значение shiftAmount)
    // потому что в прошлых значения уже вычтено допустим два, а тут ещё два, в итоге у каждого объекта с неправильным лвлом необходимо убирать 4 уровня
    var totalShift = 0;

    result = result.map((data, i) => {
      var foundShift = reverseShifts.find((shift) => data.scheme.level[0] > shift.index);
      if (foundShift) {
        totalShift = totalShift + foundShift.shiftAmount;
        data.scheme.level[0] = data.scheme.level[0] - totalShift;
      }

      return data;
    });

    // выставление рандомного размера каждому элементу
    // (пока что нерекурсивный, не проверяет все ли влазят)

    const handleSize = (array: NewsletterDataTypes[]): NewsletterDataTypes[] => {
      array = array.map((data) => {
        // либо из маленьких размеров, либо из больших
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

    // логика создания строчки для grid-template-columns
    var allElementsHeightSum = result.reduce((acc, curr) => acc + curr.scheme.size!.height, 0);
    // var gridTemplateResult: string[][] = new Array<string[]>(allElementsHeightSum).fill([".", ".", ".", "."]);
    //                                                             точки будут филлерами для пустых ячеек (в конце)
    var gridTemplateResult: string[][] = new Array<string[]>(allElementsHeightSum).fill(["", "", "", ""]);
    console.log(gridTemplateResult);
    // поиск свободного места и установка его айдшников в сободные поля (или ничего не устанавливать если не влезло)
    const findAndSet = (id: string, data: Scheme, row: number = 0) => {
      var fits: boolean = true;
      var fittedElements: number = 0;

      var currentRow = row;
      var targetColumn: null | number = null;

      const findRowWithEmptyColumn = (row: number, targetColumn: number | null): any => {
        if (row >= gridTemplateResult.length) {
          console.log("Не получилось" /* , targetColumn, row */);
          return false;
        }

        // console.log("тут мы ищем в ряду свободное пространство");

        // тут мы ищем в ряду свободное пространство
        if (targetColumn === null) {
          for (var j = 0; j < gridTemplateResult[row].length - data.size!.width; j++) {
            // console.log(j, gridTemplateResult[row].length, data.size!.width);
            var notOccupiedColumn = gridTemplateResult[row].findIndex((space) => space.length === 0);
            if (notOccupiedColumn !== -1) {
              targetColumn = notOccupiedColumn;
              break;
            } else {
              continue;
            }
          }
        }
        // если не нашли в ряду свободного пространства ИЛИ текущий минимальный свободный индекс + ширина оъекта больше чем ширина ряда,
        // например текущий индекс (по zero-based 2, а ширина 3, то суммарно уже 5),
        // то опускаемся на ряд ниже

        if (
          targetColumn === null ||
          (targetColumn && targetColumn + data.size!.width > gridTemplateResult[row].length)
        ) {
          // console.log(
          //   !targetColumn,
          //   targetColumn && targetColumn + data.size!.width > gridTemplateResult[row].length
          // );
          currentRow = currentRow + 1;
          // console.log("то опускаемся на ряд ниже");
          findRowWithEmptyColumn(currentRow, null);
        } else {
          // тут пытаться заняться следующие колонки ряда, если ничего не получается, тоже findRowWith... с рядом ниже
          for (
            var j = targetColumn + 1;
            j < targetColumn + data.size!.width && j <= gridTemplateResult[row].length;
            j++
          ) {
            // если это уже граница, т.е. 4-й индекс (хотя их всего 3) и все влезает
            if (j === gridTemplateResult[row].length && fits && fittedElements % data.size!.width === 0) {
              currentRow = currentRow + 1;
              // console.log("если это уже граница, т.е. 4-й индекс");
              return findRowWithEmptyColumn(currentRow, targetColumn);
            }

            // если текущий элемент пустой, то всё хорошо
            if (gridTemplateResult[row][j].length === 0) {
              fits = true;
              fittedElements = fittedElements + 1;
              continue;
            } else {
              fits = false;
              fittedElements = 0;
              continue;
            }
          }

          if (!fits || fittedElements !== data.size!.width) {
            currentRow = currentRow + 1;
            // console.log("если что-то не влезло, что-то не получилось");
            return findRowWithEmptyColumn(currentRow, null);
          }

          // console.log("Всё сделано, всё влезло", targetColumn, row);
          gridTemplateResult.map((row, i) => {
            if (i >= currentRow - data.size!.height && i <= currentRow) {
              for (var j = targetColumn!; j < row.length; j++) {
                row[j] = id;
              }
            }
          });
          return true;

          // если получается этот ряд занять, то пытаться занять следующий ряд, если всё получается и высота элемента кончается
          // то элемент добавлен, иначе к шагу 1
        }
      };
      findRowWithEmptyColumn(currentRow, targetColumn);

      // установка точек в незанятых полях
      gridTemplateResult.map((row) =>
        row.map((column) => {
          if (column.length === 0) {
            column = ".";
          }
        })
      );
    };

    dataArray.map((data) => {
      if (data.scheme.level.length === 1) {
        findAndSet(`cell-${data.id}`, data.scheme, data.scheme.level[0]);
      }
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
