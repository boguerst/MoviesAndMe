// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
// import Search from '../Components/Search';
// import FilmDetails from '../Components/FilmDetails';
//
// const Stack = createStackNavigator();
// export default function SearchStackNavigation() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Search"
//       screenOptions={{ gestureEnabled: false }}
//     >
//       <Stack.Screen
//         name='Search'
//         component={Search}
//         options={{ title: 'Rechercher' }}
//       />
//       <Stack.Screen
//         name='FilmDetails'
//         component={FilmDetails}
//         initialParams={{ user: 'me' }}
//       />
//     </Stack.Navigator>
//   );
// };

// const SearchStackNavigation = createStackNavigator({
//   Search: {
//     screen: Search,
//     navigationOptions: {
//       title: 'Rechercher'
//     }
//   },
//
//   FilmDetails: FilmDetails
// });
//
// export default createAppContainer(createStackNavigator);
