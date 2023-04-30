import React, {ReactNode} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Food from '@app/assets/icons/food.svg';
import Search from '@app/assets/icons/search.svg';
import Heart from '@app/assets/icons/heart.svg';
import Payment from '@app/assets/icons/payment.svg';

type Icon = {
  [i: string]: (i: boolean) => ReactNode;
};

const icons: Icon = {
  home: isFocused => (
    <Food color={isFocused ? '#FFF' : '#A6A6A6'} width={35} height={30} />
  ),
  search: isFocused => (
    <Search color={isFocused ? '#FFF' : '#A6A6A6'} width={35} height={30} />
  ),
  favorite: isFocused => (
    <Heart color={isFocused ? '#FFF' : '#A6A6A6'} width={35} height={30} />
  ),
  payment: isFocused => (
    <Payment color={isFocused ? '#FFF' : '#A6A6A6'} width={35} height={30} />
  ),
};

export const TabBar = ({state, navigation}: BottomTabBarProps): JSX.Element => {
  return (
    <View className="flex-row items-center justify-center space-x-10 bg-black w-full h-[94px] rounded-[100px]">
      {state.routes.map((route, index: number): JSX.Element => {
        const isFocused: boolean = state.index === index;

        const onPress = (): void => {
          navigation.navigate(route);
        };

        return (
          <TouchableOpacity key={index} onPress={onPress}>
            {icons[route.name](isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
