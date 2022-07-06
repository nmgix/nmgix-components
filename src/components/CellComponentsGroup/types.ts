export type CellTypeOrdinary = "2x2";
export type CellTypeHalf = "1x2" | "2x1";
export type CellTypeUnordinary = "2x3" | "3x2";
export type CellTypeHuge = "2x4" | "4x2" | "3x4" | "4x3" | "4x4";
export type CellTypes = CellTypeOrdinary | CellTypeHalf | CellTypeUnordinary | CellTypeHuge;

export type Scheme = {
  level: number | number[];
  defaultSize: CellTypes;
  minimumSize: CellTypes | CellTypes[];
  desirableSize: CellTypes | CellTypes[];
};

export interface DefaultData {
  id: number;
  title: string;
  scheme: Scheme;
  image?: string;
  description?: string | string[] | React.ReactNode | React.ReactNode[];
}
// в зависимости от scheme, description может не рендериться

// может быть будет генератор ссылок по типу информации, хз
export interface ArticleData extends DefaultData {
  time: number; // to read, in minutes
  date: string;
  url: string;
  techStack: string[];
}

export interface ExtraordinaryData extends DefaultData {
  title: string;
  extraOrdinaryRenderHandler: string | any;
  // пока что текст, может быть будут типы хэндлеров которые будут расширять общий интерфейс или класс с методами рендера, пока хз
}

export type NewsletterDataTypes = ArticleData | ExtraordinaryData | DefaultData;
// в рендере если не будет extraOrdinaryRenderHandler, то будут применяться
// дефолтный рендер по типу? (как-то читать типы надо будет или добавить поле,
// может быть сделаю тип внутри DefaultData и уберу вообще вот этот тип,
// будет общий и в зависимости от него будет выбирать рендер информации)
