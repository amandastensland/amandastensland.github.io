import { DatoItemInterface } from "../../interfaces/DatoItem.interface";
import { SubsectionInterface } from "../Subsection/Subsection.interface";

interface VideoInterface {
  url: string
}

export interface SubsectionVideoInterface extends SubsectionInterface {
  description?: string;
  video?: VideoInterface;
}