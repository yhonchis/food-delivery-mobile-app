type Food = {
  id: number;
  photo: any;
  title: string;
  min: number;
  calories: number;
  rating: number;
  description: string;
  price: number;
};

export const foods: Food[] = [
  {
    id: 1,
    photo: require('@app/assets/foods/Garlic_Butter_Steak_with_Asparagus.png'),
    title: 'Garlic Butter Steak with Asparagus',
    min: 30,
    calories: 275,
    rating: 4.9,
    description:
      'Chicken curry with rice is a flavorful dish made by simmering chunks of chicken in a spicy curry sauce and serving it over a bed of steamed rice. The curry sauce is typically made with a blend of aromatic spices and coriander, as well as coconut milk for creaminess.',
    price: 11,
  },
  {
    id: 2,
    photo: require('@app/assets/foods/Mediterranean_Chicken_Quinoa.png'),
    title: 'Mediterranean Chicken Quinoa',
    min: 45,
    calories: 320,
    rating: 8.5,
    description:
      'Chicken curry with rice is a flavorful dish made by simmering chunks of chicken in a spicy curry sauce and serving it over a bed of steamed rice. The curry sauce is typically made with a blend of aromatic spices and coriander, as well as coconut milk for creaminess.',
    price: 18,
  },
];
