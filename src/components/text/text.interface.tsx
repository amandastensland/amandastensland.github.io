import { IDatoItem } from "../dato-item/dato-item.interface";
import { ISubsection } from "../Subsection/subsection.interface";

export interface IText extends ISubsection {
  content: string;
}