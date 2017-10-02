import { IDatoItem } from "../../components/DatoItem/DatoItem.interface";
import { ISubsection } from "../Subsection/Subsection.interface";

interface IContent extends IDatoItem {
  title: string
}

interface ITitle extends IContent {}

interface IText extends IContent {}

export interface ISubsectionText extends ISubsection {
  content: string;
}