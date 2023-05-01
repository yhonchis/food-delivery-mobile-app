import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {AppTabScreenProps} from '@app/navigation';
import Menu from '@app/assets/icons/menu.svg';
import chili from '@app/assets/ingredients/chili.png';
import {categories, foods} from '@app/data';

export const Home = ({navigation}: AppTabScreenProps<'home'>): JSX.Element => {
  const [category, setCategory] = useState<number>(0);

  const changeCategory = (i: number): void => {
    setCategory(i);
  };

  const toInfo = (): void => {
    navigation.navigate('food');
  };

  return (
    <SafeAreaView className="flex-1 bg-body">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between space-x-2 mb-8 px-9">
          <Pressable>
            {({pressed}) => (
              <Menu color="black" className={`${pressed && 'scale-90'}`} />
            )}
          </Pressable>
          <Pressable>
            {({pressed}) => (
              <View
                className={`items-center justify-center w-11 h-11 rounded-full bg-avatar ${
                  pressed && 'scale-90'
                }`}>
                <Image source={require('@app/assets/avatars/me.png')} />
              </View>
            )}
          </Pressable>
        </View>
        <View className="justify-start mb-6 px-9">
          <Text className="text-black text-4xl leading-10 font-black font-urbanist">
            Good food.
          </Text>
          <Text className="text-black text-4xl leading-10 font-black font-urbanist">
            Fast delivery.
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="space-x-4 mb-16">
          <View className="w-4" />
          {categories.map((item, index): JSX.Element => {
            const active: boolean = index === category;
            return (
              <Pressable key={index} onPress={() => changeCategory(index)}>
                {({pressed}) => (
                  <View className="flex-col space-y-2">
                    <View
                      className={`items-center justify-center w-20 h-20 rounded-3xl bg-white ${
                        pressed ? 'shadow-none' : 'shadow-md'
                      }`}>
                      <Image className="w-12 h-12" source={item.photo} />
                    </View>
                    <Text
                      className={`${
                        active ? 'text-black/100' : 'text-black/50'
                      } text-base ${
                        active ? 'font-bold' : 'font-medium'
                      } font-urbanist text-center`}>
                      {item.title}
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </ScrollView>
        <View className="flex-col space-y-3">
          <Text className="text-black text-2xl font-black font-urbanist px-9">
            Popular now
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-8 py-8">
            <View className="w-1" />
            {foods.map((food, index): JSX.Element => {
              return (
                <Pressable key={index} onPress={toInfo}>
                  {({pressed}) => (
                    <View
                      className={`flex-col space-y-1 rounded-3xl bg-white ${
                        pressed ? 'shadow-none' : 'shadow-md'
                      } py-6 px-5 w-52`}>
                      <View className="relative items-center w-full h-24">
                        <Image
                          className="absolute bottom-0 w-36 h-36"
                          source={food.photo}
                        />
                      </View>
                      <View className="flex-col space-y-3">
                        <Text className="text-title text-lg font-medium font-urbanist text-left">
                          {food.title}
                        </Text>
                        <View className="flex-row items-center justify-between space-x-2">
                          <Text className="text-black text-2xl font-black font-urbanist">
                            ${food.price}
                          </Text>
                          <Image className="w-7 h-7" source={chili} />
                        </View>
                      </View>
                    </View>
                  )}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
