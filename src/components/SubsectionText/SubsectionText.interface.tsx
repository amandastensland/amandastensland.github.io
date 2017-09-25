import { DatoItemInterface } from "../../interfaces/DatoItem.interface";
import { SubsectionInterface } from "../Subsection/Subsection.interface";

interface ContentInterface extends DatoItemInterface {
  title: string
}

interface TitleInterface extends ContentInterface {}

interface TextInterface extends ContentInterface {}

export interface SubsectionTextInterface extends SubsectionInterface {
  content: Array<ContentInterface>;
}