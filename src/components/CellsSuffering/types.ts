export type Size = {
  width: number;
  height: number;
};

export interface DefaultData {
  type: string;
  id: number;
  title: string;
  sizes: Size[];
  image?: string;
  description?: string | string[] | React.ReactNode | React.ReactNode[];
}
// в зависимости от scheme, description может не рендериться

// может быть будет генератор ссылок по типу информации, хз
export interface ArticleData extends DefaultData {
  type: "article";
  time: number; // to read, in minutes
  date: string;
  url: string;
  techStack: string[];
}

export interface CoursesData extends DefaultData {
  type: "courses";

  //   пока что неиспользуемая переменная, будет отвечать за окраску окантовки курсов и общего блока -> будет необходимо
  // немного переделать метод рендера чтобы родитель окрашивался (вряд ли полностью переделывать рендер, скорее какой-то аля switch case)
  borderColor: string;
  courses: {
    title: string;
    teacher: string;
    mark: {
      stars: number;
      starsMax: number;
    };
    completePersantage: number;
  }[];
}

export interface GitData extends DefaultData {
  type: "git";
  gitData: {
    commitsPerYear: number;
    commitsImg: string;
    commitPersentage?: number;
    pullRequestsPersentage?: number;
    codeReviewPersentage?: number;
    issuesPersentage?: number;
  };
}

export interface BioData extends DefaultData {
  type: "bio";
  // пока что временно ReactNode, а не ReactNode[]
  description: React.ReactNode;
}

export type NewsletterDataTypes = ArticleData | CoursesData | BioData | GitData;
