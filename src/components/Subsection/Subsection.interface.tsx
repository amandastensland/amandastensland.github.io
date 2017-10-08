import { IDatoItem } from "../../components/dato-item/dato-item.interface";

export interface ISubsection extends IDatoItem {
  title: string;
  description: string;
  video: { url: string; };
}