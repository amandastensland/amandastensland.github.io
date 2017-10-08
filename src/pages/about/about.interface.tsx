import { IBlock } from "../../components/block/block.interface";

export interface IAbout {
  id: string;
  itemType: string;
  content: IBlock[];
}