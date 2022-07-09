export interface Cell {
  width: number;
  height: number;
}

export type Scheme = {
  size: Cell | null;
  level: number[];
  defaultSize: Cell;
  minimumSize: Cell[];
  desirableSize: Cell[];
};

export interface DefaultData {
  type: string;
  id: number;
  title: string;
  scheme: Scheme;
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
  type: "lessons";

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

export type ReverseShift = {
  level: number;
  shiftAmount: number;
};
