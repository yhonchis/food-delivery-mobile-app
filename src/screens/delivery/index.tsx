import React from 'react';
import {Text, View, Image, StatusBar, Pressable} from 'react-native';
import {AppStackScreenProps} from '@app/navigation';
import ArrowLeft from '@app/assets/icons/arrow-left.svg';
import Gps from '@app/assets/icons/gps.svg';
import Timer from '@app/assets/icons/timer.svg';
import Location from '@app/assets/icons/location.svg';
import Phone from '@app/assets/icons/phone.svg';
import UserLocation from '@app/assets/icons/user-location.svg';
import Route from '@app/assets/icons/route.svg';
import mapa from '@app/assets/maps/mapa.png';
import delivery from '@app/assets/maps/delivery.png';
import user from '@app/assets/avatars/user.png';

export const Delivery = ({
  navigation,
}: AppStackScreenProps<'delivery'>): JSX.Element => {
  return (
    <View className="relative flex-1 bg-info">
      <StatusBar hidden />
      <Image className="absolute top-0 left-0 w-full h-full" source={mapa} />
      <View className="absolute top-0 left-0 z-10 w-full flex-row items-center justify-between space-x-2 mb-8 px-5 py-7">
        <Pressable onPress={navigation.goBack}>
          {({pressed}) => (
            <View
              className={`items-center justify-center w-14 h-14 rounded-full bg-back2 shadow-md ${
                pressed && 'scale-90'
              }`}>
              <ArrowLeft color="#000" width={30} height={30} />
            </View>
          )}
        </Pressable>
        <Pressable>
          {({pressed}) => (
            <View
              className={`items-center justify-center w-14 h-14 rounded-full bg-white shadow-md ${
                pressed && 'scale-90'
              }`}>
              <Gps color="#000" width={30} height={30} />
            </View>
          )}
        </Pressable>
      </View>
      <UserLocation
        width={57}
        height={57}
        className="absolute top-[12%] left-[35%] z-20"
      />
      <Route
        width={38.5}
        height={300.5}
        className="absolute top-[12.5%] left-[43%] z-10"
      />
      <View className="absolute top-[42%] left-[38%] z-20 items-center justify-center w-20 h-20 rounded-full bg-white shadow-md">
        <Image className="w-9 h-9" source={delivery} />
      </View>
      <View className="absolute justify-center left-0 right-0 bottom-0 px-8 pb-7">
        <View className="flex-1 bg-white shadow-md rounded-3xl rounded-b-[50px]">
          <View className="flex-col space-y-4 pt-5 pb-7">
            <View className="flex-row items-center space-x-4 px-8">
              <View className="items-center justify-center w-14 h-14 rounded-full bg-back2">
                <Timer color="#000" width={25} height={25} />
              </View>
              <View className="flex-col space-y-0.5">
                <Text className="text-black text-xs font-bold font-urbanist">
                  10-15 min
                </Text>
                <Text className="text-description2 text-[9px] leading-3 font-medium font-urbanist">
                  Delivery time
                </Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-4 px-8">
              <View className="items-center justify-center w-14 h-14 rounded-full bg-back2">
                <Location color="#000" width={25} height={25} />
              </View>
              <View className="flex-col space-y-0.5">
                <Text className="text-black text-xs font-bold font-urbanist">
                  70 Washington Square
                </Text>
                <Text className="text-description2 text-[9px] leading-3 font-medium font-urbanist">
                  Delivery address
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1 flex-row items-center justify-between space-x-3 bg-courier px-5 py-4 rounded-full">
            <View className="flex-row items-center space-x-3">
              <Image className="w-16 h-16 rounded-full" source={user} />
              <View className="flex-col space-y-1.5">
                <Text className="text-white text-xs font-bold font-urbanist">
                  Jordan Keith
                </Text>
                <Text className="text-white text-[10px] leading-3 font-medium font-urbanist">
                  Courier
                </Text>
              </View>
            </View>
            <Pressable>
              {({pressed}) => (
                <View
                  className={`items-center justify-center w-16 h-16 rounded-full bg-white/25 ${
                    pressed && 'scale-90'
                  }`}>
                  <Phone
                    color="#00FF38"
                    width={34}
                    height={34}
                    className="-rotate-90"
                  />
                </View>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
