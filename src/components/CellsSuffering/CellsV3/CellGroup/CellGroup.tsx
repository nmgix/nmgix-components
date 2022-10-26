import { reduce } from "lodash";
import { useState } from "react";

export type DataSize = {
  sizes: Size[];
};

export type Size = {
  id: string;
  width: number;
  height: number;
};

type Pointer = {
  x: number;
  y: number;
};

export const CellGroup: React.FC<{ data: DataSize[] }> = ({ data }) => {
  function createMap(data: DataSize[]): any {
    function generateRandomSize(sizesData: DataSize): Size {
      const { sizes } = sizesData;
      return sizes[Math.floor(Math.random() * sizes.length)];
    }
    function assamble(cells: Size[], map: string[][]): string[][] {
      let localMap = [...map];

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

        let { width, height, id } = cells[c];

        function recoursivePointer(startFromY: number = 0): Pointer {
          let emptyCell = findEmpty(map, startFromY)!;

          let available = 0;

          for (let i = emptyCell.y; i < emptyCell.y + height; i++) {
            for (let j = emptyCell.x; j < emptyCell.x + width; j++) {
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
            localMap[i][j] = id;
          }
        }
      }

      return localMap;
    }

    function init() {
      let map = Array(30)
        .fill(0)
        .map(() => Array(4).fill("."));

      const cells = data.map((d) => generateRandomSize(d));

      map = assamble(cells, map);
      console.log(map);
      return map;
    }

    return init();
  }

  const [map] = useState(() => createMap(data));

  return (
    <div>
      {data.map((cell, i) => (
        <div key={cell.sizes[0].id}>
          <h4>cell no. {i}</h4>
          <p></p>
        </div>
      ))}
    </div>
  );
};
