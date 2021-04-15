import * as React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { routeNavigatorScreenOptions } from './options'
import { routes } from '@constants'

import { MainStackNavigator } from './stacks'
import { View } from 'react-native'

enableScreens()
const RootStack = createStackNavigator()

const MyTheme: any = {
	dark: true,
	colors: {
		background: 'rgba(57,64,72,255)',
	},
}

const AppNavigator: React.ForwardRefRenderFunction<unknown, TProps> = ref => {
	return (
		// <NavigationContainer theme={MyTheme}>

		// 	</NavigationContainer>
		<NavigationContainer theme={MyTheme}>
			<RootStack.Navigator screenOptions={routeNavigatorScreenOptions}>
				<RootStack.Screen name={routes.MAIN_NAVIGATOR} component={MainStackNavigator} />
			</RootStack.Navigator>
		</NavigationContainer>
	)
}

type TProps = {}

export default AppNavigator
