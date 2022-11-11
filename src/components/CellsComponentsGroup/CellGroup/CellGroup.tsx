import { useState } from "react";
import { Cell } from "../Cell/Cell";
import { DefaultData, NewsletterDataTypes, Size } from "../types";
import "../_cell.module.scss";
import useWindowDimentions from "../../../hooks/useWindowDimentions";
import React from "react";

type Pointer = {
  x: number;
  y: number;
};

/**
 * Cell Group Component.
 * That component is a grid for cell components that are randomly placed.
 * @param data array of news, articles e.t.c.
 * @returns {React.FC<{ data: NewsletterDataTypes[] }>} Functional Component
 */
export const CellGroup: React.FC<{ data: NewsletterDataTypes[] }> = ({ data }) => {
  const { width, height } = useWindowDimentions();

  function createMap(data: NewsletterDataTypes[]): any {
    const rowWidth = width < 800 ? 2 : 4;

    function findEmpty(map: string[][], startFrom: number = 0) {
      for (let i = startFrom; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
          if (map[i][j] === ".") {
            return {
              x: j,
              y: i,
            };
          }
        }
      }
    }

    function recoursivePointer(map: string[][], cellSize: Size, startFromY: number = 0): Pointer {
      let emptyCell = findEmpty(map, startFromY);

      if (!emptyCell) {
        map.push([...Array(rowWidth).fill(".")]);
        emptyCell = findEmpty(map, startFromY)!;
      }

      let available = 0;

      for (let i = emptyCell.y; i < emptyCell.y + cellSize.height; i++) {
        if (map[i] === undefined) {
          map.push([...Array(rowWidth).fill(".")]);
        }
        for (let j = emptyCell.x; j < emptyCell.x + cellSize.width; j++) {
          if (map[i][j] === ".") {
            available++;
          }
        }
      }

      if (available === cellSize.width * cellSize.height) {
        return emptyCell;
      } else {
        return recoursivePointer(map, cellSize, emptyCell ? ++emptyCell.y : ++startFromY);
      }
    }

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
        let { id, sizes } = cells[c];
        let { width, height } = sizes[0];

        pointer = recoursivePointer(map, sizes[0]);

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

      return {
        map,
        cells,
      };
    }

    return init();
  }

  const [{ map, cells }] = useState<{ map: string[][]; cells: NewsletterDataTypes[] }>(() => createMap(data));

  return (
    <ul style={{ gridTemplateAreas: "'" + map.map((row) => row.join(" ")).join("' '") + "'" }} className={"cell-group"}>
      {cells.map((cell, i) => (
        <Cell {...cell} key={cell.id} />
      ))}
    </ul>
  );
};
