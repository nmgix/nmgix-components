// import { useEffect, useState } from "react";
// import { matrix } from "../../../helpers/cellHelpers";
// import { NewsletterDataTypes } from "src/components/CellComponentsGroup/types";
// import { Cell } from "../Cell/Cell";

// type CellGridProps = {
//   data: NewsletterDataTypes[];
// };
// export const CellGrid: React.FC<CellGridProps> = ({ data }) => {
//   function preformateData(data: NewsletterDataTypes[]): NewsletterDataTypes[] {
//     let definedLevels = data.map((news) => {
//       let levels = news.scheme.level;
//       if (levels.length > 1) {
//         levels = [levels[Math.floor(Math.random() * levels.length)]];
//       }
//       return news;
//     });
//     let levelSorted = definedLevels.sort((news1, news2) => news1.scheme.level[0] - news2.scheme.level[0]);

//     let currentLevel = levelSorted[0].scheme.level[0];
//     let smoothedLevels = levelSorted.map((news, index) => {
//       if (index === 0 || news.scheme.level[0] === levelSorted[index - 1].scheme.level[0]) {
//         return news;
//       } else {
//         currentLevel = levelSorted[index - 1].scheme.level[0] + 1;
//         news.scheme.level[0] = currentLevel;
//         return news;
//       }
//     });

//     let randomSized = smoothedLevels.map((news) => {
//       let scheme = news.scheme;
//       let sizes = [scheme.defaultSize, ...scheme.minSize, ...scheme.maxSize];
//       scheme.size = sizes[Math.floor(Math.random() * sizes.length)];
//       return news;
//     });

//     return randomSized;
//   }

//   function formateGrid(data: NewsletterDataTypes[]): string {
//     let grid: string[][] = matrix(4, data.length, ".");

//     let formatedGrid = "'" + grid.map((arr) => arr.join(" ")).join("' '") + "'";

//     return formatedGrid;
//   }

//   let initialState = preformateData(data);

//   let [news] = useState<NewsletterDataTypes[]>(initialState);
//   let [grid] = useState<string>(formateGrid(initialState));

//   return (
//     <ul
//       style={{
//         padding: 0,
//         margin: 0,
//         listStyleType: "none",
//         display: "grid",
//         gridTemplateAreas: grid,
//         gridGap: "24px",
//       }}>
//       {news.map((news, i) => (
//         <Cell data={news} index={i + 1} key={news.id} />
//       ))}
//     </ul>
//   );
// };
