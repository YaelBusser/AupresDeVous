import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeGuest from '../screens/Guest/Home/index.tsx';
import AuthConnection from '../screens/Guest/Auth/Connection';
import stylesMain from '../styles/main.tsx';
import {IconButton} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type RootStackParamList = {
  Home: undefined;
  AuthConnection: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const bezierInterpolator = (value: number) => {
  return value * (2 - value);
};
const Routes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      headerStyle: stylesMain.header,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Stack.Screen
      name="Home"
      component={HomeGuest}
      options={{title: 'Accueil'}}
    />
    <Stack.Screen name="AuthConnection" component={AuthConnection} />
  </Stack.Navigator>
);

export default Routes;
