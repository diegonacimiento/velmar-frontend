import { SetStateAction } from "react";

export interface Context {
 addressValue: string;
 updateAddressValue: (value: string) => void;
}