import { Image } from "../../ImageComponentsGroup";
import { NewsletterDataTypes } from "../types";

const NewsletterDataComponent: React.FC<NewsletterDataTypes> = (cell) => {
  switch (cell.type) {
    case "git": {
      return (
        <div className='cell-type-github'>
          <h3>Github Stats</h3>
          <div>
            <span>
              <b>{cell.gitData.commitsPerYear}</b> коммитов в год
            </span>
            <span>
              <b>{cell.gitData.codeReviewPersentage}%</b> код-ревью в год
            </span>
          </div>
          {/* cell.gitData.commitsImg */}
          <Image src={require("../example-data/github-example.png")} label={"github-stats"} showLabel={false} />
          <div>
            <span>
              <b>{cell.gitData.issuesPersentage}%</b> тикетов
            </span>
            <span>
              <b>{cell.gitData.pullRequestsPersentage}%</b> пулл-реквесты
            </span>
          </div>
        </div>
      );
    }
    case "bio": {
      return <div className='cell-type-bio'>{cell.description}</div>;
    }
    case "courses": {
      return (
        <ul
          className='cell-type-courses'
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
        <div className='cell-type-article'>
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
