// // dependencies
import * as React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//constatnt
import {
  COLORS,
  SCREENS
} from "./src/constants";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.primary,
    height: 70,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
});

// setting options for tab bar
const tabBarOptions = {
  activeTintColor: COLORS.active,
  inactiveTintColor: COLORS.inActive,
  showLabel: false,
  style: styles.tabBar
}

// setting tab bar icon
const tabBarIcon = (focused, color, route) => {
  let currentScreen = SCREENS.find(screen => screen.name === route.name);
  let iconName = currentScreen[focused ? "activeIcon" : "inactiveIcon"];

  // any component can be returned from here
  return <Icon name={iconName} size={30} color={color} />;
}

// createBottomTabNavigator() is used to create Tab Navigation
const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => tabBarIcon(focused, color, route),
              })}
              tabBarOptions={tabBarOptions}
            >
              {SCREENS.map((screen, key) => <Tab.Screen
                key={key}
                name={screen.name}
                component={screen.component}
              />
              )}
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}