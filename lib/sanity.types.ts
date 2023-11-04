type Post = {
  title: string;
  slug: {
    current: string;
  };
  body: any;
  readTime: number;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  _createdAt: string;
}