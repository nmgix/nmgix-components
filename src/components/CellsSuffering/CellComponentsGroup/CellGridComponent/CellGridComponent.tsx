import React, { useEffect, useState } from "react";
import { CellComponent } from "../CellComponent";
import { getRandomInt, matrix } from "../../../../helpers/cellHelpers";
import { NewsletterDataTypes, ReverseShift, Scheme } from "../types";
import { Cell } from "../types";
import "../_cell.scss";

type CellGridProps = {
  data: NewsletterDataTypes[];
};

export const CellGrid: React.FC<CellGridProps> = ({ data }) => {
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
            ? data.scheme.minSize[getRandomInt(0, data.scheme.minSize.length - 1)]
            : data.scheme.maxSize[getRandomInt(0, data.scheme.maxSize.length - 1)];
        return data;
      });

      return array;
    };
    result = handleSize(result);

    var cellsHeightPerLevel = 2;
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
          notFitted.push(data);
          return false;
        }

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

  const [renderScheme] = useState<[NewsletterDataTypes[], string]>(() => GridGenerator(data));

  return (
    <ul className='cell-grid' style={{ gridTemplateAreas: renderScheme[1] }}>
      {renderScheme[0].map((scheme) => (
        <CellComponent data={scheme} key={scheme.id} />
      ))}
    </ul>
  );
};
