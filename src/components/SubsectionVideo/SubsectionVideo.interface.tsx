import { IDatoItem } from "../../components/DatoItem/DatoItem.interface";
import { ISubsection } from "../Subsection/Subsection.interface";

interface VideoInterface {
  url: string
}

export interface ISubsectionVideo extends ISubsection {
  description: string;
  video: VideoInterface;
}