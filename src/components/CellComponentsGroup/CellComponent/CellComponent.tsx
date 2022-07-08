import React from "react";
import { Cell, NewsletterDataTypes, ArticleData } from "../types";
import "../_cell.scss";

export type CellProps = {
  data: NewsletterDataTypes;
};

export const CellComponent: React.FC<CellProps> = ({ data }) => {
  {
    /* вообще должен быть Link, ну ладно, там пока с extraOrdinaryRenderMethod не понятно */
  }
  return (
    <li className={`cell cell-width-${data.scheme.size!.width} cell-height-${data.scheme.size!.height}`}>
      {/* пример тестовое MindBox и Funbox */}
      <div style={{ display: "flex", flexDirection: data.scheme.size!.height > 1 ? "column" : "row" }}>
        {data.image ? <img src={data.image} alt={data.title + " img"} /> : <></>}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <h2>{data.title}</h2>
          {
            // @ https://stackoverflow.com/questions/58630750/react-typescript-component-with-two-different-prop-interfaces
            data.type === "article" ? (
              <div className='article-content'>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                  }}>
                  <span>{data.time} мин на чтение</span>
                  <span>{data.date}</span>
                </div>
                <ul className='article-techstack'>
                  {data.techStack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            ) : data.type === "lessons" ? (
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                {data.courses.map((course) => (
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
            ) : data.type === "git" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <span>{data.gitData.commitsPerYear} коммитов в год</span>
                <img src={data.gitData.commitsImg} alt={"git commits infographic"} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}>
                  {data.gitData.commitPersentage ? <span>{data.gitData.commitPersentage}% коммиты</span> : <></>}
                  {data.gitData.pullRequestsPersentage ? (
                    <span>{data.gitData.pullRequestsPersentage}% пулл-реквесты</span>
                  ) : (
                    <></>
                  )}
                  {data.gitData.codeReviewPersentage ? (
                    <span>{data.gitData.codeReviewPersentage}% код-ревью</span>
                  ) : (
                    <></>
                  )}
                  {data.gitData.issuesPersentage ? <span>{data.gitData.issuesPersentage}% разбор ошибок</span> : <></>}
                </div>
              </div>
            ) : data.type === "bio" ? (
              // тут скорее всего будет проблемное место
              <div>{data.description}</div>
            ) : (
              <></>
            )
          }
        </div>
      </div>
    </li>
  );
};
