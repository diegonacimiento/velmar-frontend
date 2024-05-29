export interface IBrand {
  id: number;
  name: string;
}

export interface IPayloadCreateBrand {
  name: string;
}

export interface IPayloadUpdateBrand extends Partial<IPayloadCreateBrand> {}
