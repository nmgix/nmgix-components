import { useState } from "react";
import { Cell } from "../Cell/Cell";
import { DefaultData, NewsletterDataTypes } from "../types";
import "../_cell.scss";

type Pointer = {
  x: number;
  y: number;
};

export const CellGroup: React.FC<{ data: NewsletterDataTypes[] }> = ({ data }) => {
  function createMap(data: NewsletterDataTypes[]): any {
    function generateRandomSize(sizesData: DefaultData): DefaultData {
      const { sizes } = sizesData;
      sizesData.sizes = [sizes[Math.floor(Math.random() * sizes.length)]];
      return sizesData;
    }
    function assamble(cells: DefaultData[], tries: number = 0): string[][] {
      let map: string[][] = [];
      cells = cells
        .map((val) => ({ value: val, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      let pointer: Pointer = {
        x: 0,
        y: 0,
      };

      for (let c = 0; c < cells.length; c++) {
        function findEmpty(map: string[][], startFrom: number = 0) {
          let localMap = [...map];

          for (let i = startFrom; i < localMap.length; i++) {
            for (let j = 0; j < localMap.length; j++) {
              if (localMap[i][j] === ".") {
                return {
                  x: j,
                  y: i,
                };
              }
            }
          }
        }

        let { id, sizes } = cells[c];
        let { width, height } = sizes[0];

        function recoursivePointer(startFromY: number = 0): Pointer {
          let emptyCell = findEmpty(map, startFromY);

          if (!emptyCell) {
            map.push([...Array(4).fill(".")]);
            emptyCell = findEmpty(map, startFromY)!;
          }

          let available = 0;

          for (let i = emptyCell.y; i < emptyCell.y + height; i++) {
            for (let j = emptyCell.x; j < emptyCell.x + width; j++) {
              if (map[i] === undefined) {
                map.push([...Array(4).fill(".")]);
              }
              if (map[i][j] === ".") {
                available++;
              }
            }
          }

          if (available === width * height) {
            return emptyCell;
          } else {
            return recoursivePointer(emptyCell.y + 1);
          }
        }

        pointer = recoursivePointer();

        for (let i = pointer.y; i < pointer.y + height; i++) {
          for (let j = pointer.x; j < pointer.x + width; j++) {
            map[i][j] = `cell-${id}`;
          }
        }
      }

      let holesMap = [...map];
      let lastRowsIdxs: number[] = [];
      holesMap.forEach((row, i) => {
        let lastElement = cells[cells.length - 1];
        if (row.includes(`cell-${lastElement.id}`) && row.includes(".")) {
          lastRowsIdxs.push(i);
        }
      });
      if (lastRowsIdxs.length > 0) {
        holesMap.splice(lastRowsIdxs[0], lastRowsIdxs.length);
      }

      let gapsCount = 0;
      holesMap.forEach((row) => {
        if (row.includes(".")) {
          gapsCount++;
        }
      });
      if (gapsCount > 0 && tries < 30) {
        return assamble(cells, ++tries);
      } else {
        return map;
      }
    }

    function init() {
      const cells = data.map((d) => generateRandomSize(d));
      let map: string[][] = assamble(cells);

      return map;
    }

    return init();
  }

  const [map] = useState<string[][]>(() => createMap(data));

  return (
    <ul style={{ gridTemplateAreas: "'" + map.map((row) => row.join(" ")).join("' '") + "'" }} className={"cell-group"}>
      {data.map((cell, i) => (
        <Cell {...cell} />
      ))}
    </ul>
  );
};