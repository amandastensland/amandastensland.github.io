export interface IVideo {
  id: string;
  title: string;
  updatedAt: string;
  itemType: string
  content: string;
  video: { url: string };
}