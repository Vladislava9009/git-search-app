// Reactn documentation: https://github.com/CharlesStover/reactn#table-of-contents
// import addReactNDevTools from 'reactn-devtools'
import init from 'reactn-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import initialGlobal from './initialGlobal'
import persistedKeys from './persistedKeys'
import reactn from 'reactn'
export {
	getGlobal, // const token = getGlobal().auth.token
	resetGlobal, // resetGlobal()
	setGlobal, // setGlobal({ value: 3 })
	useGlobal, // const [count, setCount] = useGlobal('count')
	withInit, // withInit(INITIAL_STATE, INITIAL_REDUCERS)(AppComponent)
	/*	
    	withGlobal(
    		global => ({ 
    			value: global.value 
    		}), 
    		setGlobal => ({ 
    			incrementValue: () => { 
    				setGlobal(global => ({ value: global.value + 1 })); 
    			} 
    		}) 
    	)(MyComponent);
    */
	withGlobal,
} from 'reactn'

export const initGlobal = () =>
	init({
		storage: AsyncStorage,
		whitelist: persistedKeys,
		initialValue: initialGlobal,
		debounceDelay: 0,
		provider: reactn,
		// debug: true,
	})
