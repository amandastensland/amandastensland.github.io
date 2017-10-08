import { IDatoItem } from "../dato-item/dato-item.interface";
import { ISubsection } from "../subsection/subsection.interface";

export interface ISection extends IDatoItem {
  title: string;
  subsections: Array<ISubsection>;
};