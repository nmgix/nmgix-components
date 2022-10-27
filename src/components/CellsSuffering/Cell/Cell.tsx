import { Image } from "../../ImageComponentsGroup";
import { DefaultData, GitData, NewsletterDataTypes } from "../types";

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

// return (
//   <li
//     className={`cell cell-width-${data.scheme.size!.width} cell-height-${data.scheme.size!.height}`}
//     style={{ gridArea: `cell-${data.id}` }}>
//     {/* пример тестовое MindBox и Funbox */}
//     <div style={{ flexDirection: data.scheme.size!.height > 1 ? "column" : "row" }} className={"cell-wrapper"}>
//       {data.image ? <img src={data.image} alt={data.title + " img"} /> : <></>}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//         className={"article-wrapper"}>
//         <h2>{data.title}</h2>
//         {
//           // @ https://stackoverflow.com/questions/58630750/react-typescript-component-with-two-different-prop-interfaces
//           data.type === "article" ? (
//             <div className='article-content'>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "flex-end",
//                   flexWrap: "wrap",
//                 }}>
//                 <span>{data.time} мин на чтение</span>
//                 <span>{data.date}</span>
//               </div>
//               <ul className='article-techstack'>
//                 {data.techStack.map((technology) => (
//                   <li key={technology}>{technology}</li>
//                 ))}
//               </ul>
//             </div>
//           ) : data.type === "lessons" ? (
//             <ul
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//               }}>
//               {data.courses.map((course) => (
//                 <li key={course.title}>
//                   {/* тут попробую использовать p чтобы обрезать текст с его троеточиями */}
//                   <p>{course.title}</p>
//                   <p>{course.teacher}</p>
//                   <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     <span>
//                       {course.mark.stars}/{course.mark.starsMax}
//                     </span>
//                     <span>{course.completePersantage}%</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : data.type === "git" ? (
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//               }}>
//               <span>{data.gitData.commitsPerYear} коммитов в год</span>
//               <img src={data.gitData.commitsImg} alt={"git commits infographic"} />
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   flexWrap: "wrap",
//                 }}>
//                 {data.gitData.commitPersentage ? <span>{data.gitData.commitPersentage}% коммиты</span> : <></>}
//                 {data.gitData.pullRequestsPersentage ? (
//                   <span>{data.gitData.pullRequestsPersentage}% пулл-реквесты</span>
//                 ) : (
//                   <></>
//                 )}
//                 {data.gitData.codeReviewPersentage ? (
//                   <span>{data.gitData.codeReviewPersentage}% код-ревью</span>
//                 ) : (
//                   <></>
//                 )}
//                 {data.gitData.issuesPersentage ? <span>{data.gitData.issuesPersentage}% разбор ошибок</span> : <></>}
//               </div>
//             </div>
//           ) : data.type === "bio" ? (
//             // тут скорее всего будет проблемное место
//             <div>{data.description}</div>
//           ) : (
//             <></>
//           )
//         }
//       </div>
//     </div>
//   </li>
// );

const NewsletterDataComponent: React.FC<NewsletterDataTypes> = (cell) => {
  switch (cell.type) {
    case "git": {
      return (
        <div
          className='cell-github'
          style={{
            backgroundColor: "#0D1117",
            listStyleType: "none",

            height: "100%",
          }}>
          <h3 style={{ textAlign: "center", color: "#FFFFFF60", margin: "0px" }}>Github Stats</h3>
          <div>
            <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
              <b>408</b> коммитов в год
            </span>
          </div>
          <Image src={require("../example-data/github-example.png")} label={"guthub-stats"} showLabel={false} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
              <b>96%</b> коммиты
            </span>
            <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
              <b>4%</b> пулл-реквесты
            </span>
          </div>
        </div>
      );
    }
    case "bio": {
      return <div>{cell.description}</div>;
    }
    case "courses": {
      return (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          {cell.courses.map((course) => (
            <li key={course.title}>
              {/* тут попробую использовать p чтобы обрезать текст с его троеточиями */}
              <p>{course.title}</p>
              <p>{course.teacher}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  {course.mark.stars}/{course.mark.starsMax}
                </span>
                <span>{course.completePersantage}%</span>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    case "article": {
      return (
        <div className='article-content'>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}>
            <span>{cell.time} мин на чтение</span>
            <span>{cell.date}</span>
          </div>
          <ul className='article-techstack'>
            {cell.techStack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
};

export const Cell: React.FC<NewsletterDataTypes> = (cellData) => {
  const { id, sizes } = cellData;
  const { width, height } = sizes[0];

  return (
    <li className={`cell`} style={{ gridArea: `cell-${id}` }} key={id}>
      <NewsletterDataComponent {...cellData} />
    </li>
  );
};
