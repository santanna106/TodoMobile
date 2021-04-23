import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import Task from '../views/Task';

const Stack = createStackNavigator();

function AppStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}
          />
          <Stack.Screen name="Task" component={Task}
                 options={{
                    headerShown: false
                }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppStack;