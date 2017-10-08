import { IBlock } from "../block/block.interface";

export interface IBlogPost {
  id: string;
  itemType: string;
  updatedAt: string;
  title: string;
  content: IBlock[];
};