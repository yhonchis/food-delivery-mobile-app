type Category = {
  photo: any;
  title: string;
};

export const categories: Category[] = [
  {
    photo: require('@app/assets/categories/main.png'),
    title: 'Main',
  },
  {
    photo: require('@app/assets/categories/soups.png'),
    title: 'Soups',
  },
  {
    photo: require('@app/assets/categories/salads.png'),
    title: 'Salads',
  },
  {
    photo: require('@app/assets/categories/drinks.png'),
    title: 'Drinks',
  },
];
