import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from './components/Homescreen';
import Profilescreen from './components/Profilescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="home"
          component={Homescreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profile"
          component={Profilescreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
