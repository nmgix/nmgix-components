import { Image } from "../../../ImageComponentsGroup";
import { GitData, NewsletterDataTypes } from "../../CellComponentsGroup/types";

// const Cell1X2Github: React.FC<GitData> = (data) => {
//   return (
//     <li
//       className='cell-github'
//       style={{
//         border: "4px solid #0A0C10",
//         backgroundColor: "#0D1117",
//         borderRadius: "10px",
//         padding: "10px",
//         listStyleType: "none",
//         width: "calc(350px - 4px - 4px - 10px - 10px)",
//       }}>
//       <h3 style={{ textAlign: "center", color: "#FFFFFF60", margin: "0px" }}>Github Stats</h3>
//       <div>
//         <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
//           <b>408</b> коммитов в год
//         </span>
//       </div>
//       <Image src={require("../example-data/github-example.png")} label={"guthub-stats"} showLabel={false} />
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
//           <b>96%</b> коммиты
//         </span>
//         <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
//           <b>4%</b> пулл-реквесты
//         </span>
//       </div>
//     </li>
//   );
// };

// const Cell1X2: React.FC<NewsletterDataTypes> = (data) => {
//   return (
//     <li
//       className='cell-1x2'
//       style={{
//         borderRadius: "10px",
//         backgroundColor: "#FFFFFF",
//         padding: "10px",
//         listStyleType: "none",
//         width: "calc(350px - 10px - 10px)",
//       }}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <Image
//           src={require("../example-data/nyamushka.png")}
//           label={"nyamushka"}
//           showLabel={false}
//           styles={{ flex: 1 }}
//         />
//         <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
//           <h3 style={{ textAlign: "center", color: "#000", margin: "0px" }}>Тестовое в Funbox</h3>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <span style={{ color: "#00000050" }}>5 мин. на чтение</span>
//             <span style={{ color: "#00000050" }}>15/03/22</span>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <span style={{ color: "#00000070", fontWeight: "bold" }}>Typescript</span>
//             <span style={{ color: "#00000070", fontWeight: "bold" }}>React</span>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// export const Cell: React.FC<NewsletterDataTypes> = (data) => {
//   const useScheme = (dataType: NewsletterDataTypes["type"]) => {
//     switch (dataType) {
//       case "git": {
//         return <Cell1X2Github {...(data as GitData)} />;
//       }
//       case "article": {
//         return <Cell1X2 {...data} />;
//       }
//     }
//   };

//   return <>{useScheme(data.type)}</>;
// };
