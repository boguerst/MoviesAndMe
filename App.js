
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';
import Search from './Components/Search';
import FilmDetail from './Components/FilmDetail';
import Favorites from './Components/Favorites';
import Test from './Components/Test';

const Stack = createStackNavigator();
function SearchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name='Search'
        component={Search}
        options={{ title: 'Rechercher' }}
      />
      <Stack.Screen
        name='FilmDetail'
        component={FilmDetail}
        options={{ title: 'Détail du film' }}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
  )
};

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Search' component={SearchStackNavigator}
              options={{
                tabBarIcon: () => (
                  <Image
                    source={require('./Images/ic_search.png')}
                    style={styles.icon}/>
                )
              }}
              />
            <Tab.Screen name='Favorites' component={Favorites}
              options={{
                title: 'Favoris',
                tabBarIcon: () => (
                  <Image
                    source={require('./Images/ic_favorite.png')}
                    style={styles.icon}/>
                )
              }}
              />
            <Tab.Screen name='Test' component={Test}
              options={{
                title: 'Test',
                tabBarIcon: () => (
                  <Image
                    source={require('./Images/ic_favorite.png')}
                    style={styles.icon}/>
                )
              }}
              />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
});
