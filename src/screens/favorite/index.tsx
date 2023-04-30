import React from 'react';
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

export const Favorite = ({}: AppTabScreenProps<'favorite'>): JSX.Element => {
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
            Favorite food.
          </Text>
          <Text className="text-black text-4xl leading-10 font-black font-urbanist">
            Fast delivery.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
