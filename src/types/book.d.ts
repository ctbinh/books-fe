type BookInfo = {
  id: string,
  title: string;
  author: string;
  publishedDate: string;
  description: string;
  price: number;
  imageUrl?: string;
}

type CreateBookData = {
  title: string;
  author: string;
  description: string;
  price: number;
  imageUrl: string;
  publishedDate: string;
}