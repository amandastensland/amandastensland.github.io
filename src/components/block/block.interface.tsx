export interface IBlock {
  id: string;
  updatedAt: string;
  title: string;
  itemType: string;
  image?: { url: string };
  url?: string;
  content?: string;
}