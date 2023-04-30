import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type AppTabParamList = {
  home: undefined;
  search: undefined;
  favorite: undefined;
  payment: undefined;
};

export type AppStackParamList = {
  main: NavigatorScreenParams<AppTabParamList>;
  food: undefined;
  delivery: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >;
