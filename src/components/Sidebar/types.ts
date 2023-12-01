import { ReactNode } from "react";

export interface IItem {
  title: string;
  route: string;
  icon: ReactNode;
}

export interface IItemsGroup {
  menu: IItem[];
  account: IItem[];
  [key: string]: IItem[];
}
