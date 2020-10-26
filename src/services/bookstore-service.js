export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'Learning React: Functional Web Development',
      author: 'Alex Banks',
      price: 45,
      coverImage: 'https://m.media-amazon.com/images/I/7169mYAhsmL._AC_UY327_FMwebp_QL65_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error(`Error occured in ${this.constructor.name}`));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
