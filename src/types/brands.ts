export interface IBrand {
  id: number;
  name: string;
  isProtected: boolean;
}

export interface IPayloadCreateBrand {
  name: string;
}

export interface IPayloadUpdateBrand extends Partial<IPayloadCreateBrand> {}
