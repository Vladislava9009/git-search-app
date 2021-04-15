import { SafeAreaProvider, AxiosProvider } from '@components'
import { apiClient } from '@services'
import * as React from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'

const App: React.FC = () => {
	return (
		<SafeAreaProvider>
			<AxiosProvider instance={apiClient} />
		</SafeAreaProvider>
		// <SafeAreaProvider>
		// 	<StatusBar backgroundColor="#000000" barStyle="light-content" translucent={false} hidden={false} />

		// 	<BusProvider>
		// 		<AxiosProvider instance={apiClient}>
		// 			<>
		// 				<MenuProvider>
		// 					<LinkingManager appContainerRef={navigation.ref} settings={linkingConfig}>
		// 						{({ initialState }) => (
		// 							<AppNavigator
		// 								ref={navigation.ref}
		// 								initialState={initialState}
		// 								onStateChange={navigation.onStateChange}
		// 							/>
		// 						)}
		// 					</LinkingManager>
		// 				</MenuProvider>

		// 			</>
		// 		</AxiosProvider>
		// 	</BusProvider>
		// </SafeAreaProvider>
	)
}

export default App
