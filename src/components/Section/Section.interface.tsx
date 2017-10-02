import { IDatoItem } from "../../components/DatoItem/DatoItem.interface";
import { ISubsection } from "../Subsection/Subsection.interface";
import { ISubsectionText } from "../SubsectionText/SubsectionText.interface";
import { ISubsectionVideo } from "../SubsectionVideo/SubsectionVideo.interface";

export interface ISection extends IDatoItem {
  title: string;
  subsections: Array<ISubsection>;
};