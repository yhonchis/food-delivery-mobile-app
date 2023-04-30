import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {AppStackScreenProps} from '@app/navigation';
import ArrowLeft from '@app/assets/icons/arrow-left.svg';
import Heart from '@app/assets/icons/heart.svg';
import HeartLiked from '@app/assets/icons/heart-liked.svg';
import photo from '@app/assets/foods/Big_Mediterranean_Chicken_Quinoa.png';

export const Food = ({
  navigation,
}: AppStackScreenProps<'food'>): JSX.Element => {
  const [liked, setLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const like = (): void => {
    setLiked(!liked);
  };

  const less = (): void => {
    setCount(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const more = (): void => {
    setCount(next => {
      if (next >= 8) {
        return next;
      }
      return next + 1;
    });
  };

  const toDelivery = (): void => {
    navigation.navigate('delivery');
  };

  return (
    <View className="flex-1 bg-info">
      <StatusBar hidden />
      <View className="flex-1 h-64">
        <View className="flex-row items-center justify-between space-x-2 mb-8 px-5 py-7">
          <Pressable onPress={navigation.goBack}>
            {({pressed}) => (
              <View
                className={`items-center justify-center w-14 h-14 rounded-full bg-back ${
                  pressed && 'scale-90'
                }`}>
                <ArrowLeft color="#FFF" width={30} height={30} />
              </View>
            )}
          </Pressable>
          <Pressable onPress={like}>
            {({pressed}) => (
              <View className="items-center justify-center w-14 h-14 rounded-full bg-white">
                {liked ? (
                  <HeartLiked
                    color="#FF0000"
                    width={30}
                    height={30}
                    className={`${pressed && 'scale-90'}`}
                  />
                ) : (
                  <Heart
                    color="#000"
                    width={30}
                    height={30}
                    className={`${pressed && 'scale-90'}`}
                  />
                )}
              </View>
            )}
          </Pressable>
        </View>
      </View>
      <View className="items-center relative bg-white shadow-md rounded-t-3xl px-7">
        <View className="relative h-40 items-center mb-2">
          <Image className="absolute bottom-0 w-72 h-72" source={photo} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-col space-y-4 mb-8">
            <Text className="text-black text-3xl font-black font-urbanist text-center">
              Chicken Curry With Rice
            </Text>
            <View className="flex-row items-center justify-between space-x-2">
              <Text className="text-black text-xl font-black font-urbanist">
                ⏰ 30 Min
              </Text>
              <Text className="text-black text-xl font-black font-urbanist">
                🔥 275 calories
              </Text>
              <Text className="text-black text-xl font-black font-urbanist">
                ⭐️ 4.9
              </Text>
            </View>
          </View>
          <Text className="text-description text-xl font-medium font-urbanist mb-20">
            Chicken curry with rice is a flavorful dish made by simmering chunks
            of chicken in a spicy curry sauce and serving it over a bed of
            steamed rice. The curry sauce is typically made with a blend of
            aromatic spices and coriander, as well as coconut milk for
            creaminess.
          </Text>
        </ScrollView>
        <View className="absolute bottom-6 w-full flex-row items-center justify-between space-x-2">
          <View className="flex-row items-center bg-added rounded-2xl px-1.5">
            <Pressable onPress={less}>
              {({pressed}) => (
                <View className={`px-3 py-2 ${pressed && 'scale-90'}`}>
                  <Text className="text-black text-2xl font-semibold font-urbanist text-center">
                    -
                  </Text>
                </View>
              )}
            </Pressable>
            <Text className="w-9 text-black text-2xl font-semibold font-urbanist text-center px-3">
              {count}
            </Text>
            <Pressable onPress={more}>
              {({pressed}) => (
                <View className={`px-3 py-2 ${pressed && 'scale-90'}`}>
                  <Text className="text-black text-2xl font-semibold font-urbanist text-center">
                    +
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
          <Pressable onPress={toDelivery}>
            {({pressed}) => (
              <View
                className={`flex-row items-center space-x-4 bg-black rounded-2xl px-4 py-2 ${
                  pressed && 'scale-90'
                }`}>
                <Text className="text-white text-base font-semibold font-urbanist text-center">
                  Add to cart
                </Text>
                <Text className="text-white text-2xl font-bold font-urbanist text-center">
                  $18
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};
