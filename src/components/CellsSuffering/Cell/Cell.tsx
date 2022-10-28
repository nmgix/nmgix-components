import { Image } from "../../ImageComponentsGroup";
import { NewsletterDataTypes } from "../types";

const NewsletterDataComponent: React.FC<NewsletterDataTypes> = (cell) => {
  const { width, height } = cell.sizes[0];

  switch (cell.type) {
    case "git": {
      return (
        <div className='cell-type-github'>
          <a href={cell.url} referrerPolicy='no-referrer'>
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
          </a>
        </div>
      );
    }
    case "bio": {
      return <div className='cell-type-bio'>{cell.description}</div>;
    }
    case "courses": {
      return (
        <div className='cell-type-courses'>
          <h3 dangerouslySetInnerHTML={{ __html: cell.title }} />
          <ul
            className='cell-type-courses-content'
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            {cell.courses.map((course) => (
              <li key={course.title} style={{ border: `4px solid ${cell.borderColor}` }}>
                <a href={course.link} referrerPolicy='no-referrer'>
                  <div className='course-main'>
                    <p>{course.title}</p>
                    <p>{course.teacher}</p>
                  </div>
                  <div className='course-stats'>
                    <span>
                      <b>
                        {course.mark.stars}/{course.mark.starsMax}
                      </b>
                    </span>
                    <span>
                      <b>{course.completePersantage}%</b>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    case "article": {
      if (width === 2 && height === 1) {
        return (
          <div
            className='cell-type-article cell-type-article-2x1'
            style={{
              background: cell.backgroundColor
                ? cell.backgroundColor.length > 1
                  ? `linear-gradient(180deg, ${cell.backgroundColor.join(",")})`
                  : cell.backgroundColor[0]
                : "",
            }}>
            <div className='image-wrapper'>{cell.image ? <img /> : <div className='image-placeholder'></div>}</div>
            <div className='cell-type-article-main'>
              <h3>
                <a href={cell.url} referrerPolicy='same-origin'>
                  {cell.title}
                </a>
              </h3>
              <div className='article-time'>
                <span>{cell.time} мин на чтение</span>
                <span>{cell.date}</span>
              </div>
              <ul className='article-techstack'>
                {cell.techStack.map((technology) => (
                  <li key={technology}>
                    <b>{technology}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className='cell-type-article cell-type-article-2x2'
            style={{
              background: cell.backgroundColor
                ? cell.backgroundColor.length > 1
                  ? `linear-gradient(180deg, ${cell.backgroundColor.join(",")})`
                  : cell.backgroundColor[0]
                : "",
            }}>
            <div className='image-wrapper'>{cell.image ? <img /> : <div className='image-placeholder'></div>}</div>
            <h3>
              <a href={cell.url} referrerPolicy='same-origin'>
                {cell.title}
              </a>
            </h3>
            <div className='cell-type-article-main'>
              <div className='article-time'>
                <span>{cell.time} мин на чтение</span>
                <span>{cell.date}</span>
              </div>
              <ul className='article-techstack'>
                {cell.techStack.map((technology) => (
                  <li key={technology}>
                    <b>{technology}</b>
                  </li>
                ))}
              </ul>
              {cell.description ? (
                <div style={{ position: "relative" }}>
                  <p
                    className='article-description'
                    dangerouslySetInnerHTML={{
                      __html: `${cell.description.toString().slice(0, 90)}${
                        cell.description.toString().length > 90 ? "..." : ""
                      }`,
                    }}
                  />
                  {cell.description.toString().length > 90 ? (
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "50%",
                        background: `linear-gradient(180deg, #00000000, ${
                          cell.backgroundColor
                            ? cell.backgroundColor[cell.backgroundColor.length - 1]
                            : "rgba(var(--color-background-alter), 1)"
                        })`,
                        bottom: 0,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      }
    }
  }
};

export const Cell: React.FC<NewsletterDataTypes> = (cellData) => {
  const { id, sizes } = cellData;

  return (
    <li
      className={`cell`}
      style={{
        gridArea: `cell-${id}`,
        border: cellData.type === "courses" || cellData.type === "git" ? `3px solid ${cellData.borderColor}` : "",
      }}
      key={id}>
      <NewsletterDataComponent {...cellData} />
    </li>
  );
};
