import { IDatoItem } from "../../components/DatoItem/DatoItem.interface";

export interface ISubsection extends IDatoItem {
  title: string;
  description: string;
  video: { url: string; };
}