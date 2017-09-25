import { DatoItemInterface } from "../../interfaces/DatoItem.interface";
import { SubsectionInterface } from "../Subsection/Subsection.interface";
import { SubsectionTextInterface } from "../SubsectionText/SubsectionText.interface";
import { SubsectionVideoInterface } from "../SubsectionVideo/SubsectionVideo.interface";

export interface SectionInterface extends DatoItemInterface {
  title: string;
  subsections: Array<SubsectionInterface>;
};