export interface PostInfo extends Record<string, unknown> {
  title: string;
  description: string;
  author: string;
  pubDate: string;
  image: {
    alt: string;
    url: string;
  };
  tags: string[];
}
