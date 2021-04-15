import { SafeAreaProvider, AxiosProvider } from '@components'
import { initGlobal } from '@global'
import { AppNavigator } from '@screens'
import { apiClient } from '@services'
import * as React from 'react'
import 'react-native-gesture-handler'

initGlobal()

const App: React.FC = () => {
	return (
		<SafeAreaProvider>
			<AxiosProvider instance={apiClient}>
				<AppNavigator />
			</AxiosProvider>
		</SafeAreaProvider>
	)
}

export default App
