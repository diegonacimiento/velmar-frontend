export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IPaylaodCreateCategory {
  image: string;
  name: string;
}

export interface IPayloadUpdateCategory
  extends Partial<IPaylaodCreateCategory> {}
