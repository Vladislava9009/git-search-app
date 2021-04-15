import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { createStackNavigator } from '@react-navigation/stack'
import { TScreenParams } from '@typings'
import { defaultStackOptions } from '../options'
import { Repositories } from '@screens'

export const MainStackNavigator = () => {
	const { t } = useTranslation()

	const MainStack = createStackNavigator<TScreenParams>()
	return (
		<MainStack.Navigator screenOptions={defaultStackOptions}>
			<MainStack.Screen
				name="Repositories"
				component={Repositories}
				options={{
					headerShown: false,
				}}
			/>
		</MainStack.Navigator>
	)
}
