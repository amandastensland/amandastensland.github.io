import { IDatoItem } from "../dato-item/dato-item.interface";
import { ISubsection } from "../subsection/subsection.interface";

export interface IVideo extends ISubsection {
  description: string;
  video: { url: string };
}