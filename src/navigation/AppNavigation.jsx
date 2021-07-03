
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import List from '../screens/List'
import ListDescription from '../screens/ListDescription'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='ListDescription' component={ListDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainStackNavigator

