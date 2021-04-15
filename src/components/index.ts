export { SafeAreaProvider } from 'react-native-safe-area-context'
export { SafeAreaView } from 'react-native-safe-area-context'
export { AxiosProvider } from 'react-axios-helpers'

export {
	Alert,
	Animated,
	FlatList,
	Text as RNText,
	SectionList,
	Image,
	ImageBackground,
	RefreshControl,
	ScrollView,
	StatusBar,
	TextInput,
	TouchableWithoutFeedback,
	View,
	Platform,
	StyleSheet,
	Dimensions,
	Keyboard,
} from 'react-native'
export { Avatar, ListItem, Text as RNEText } from 'react-native-elements'

// Components
export { default as ErrorBoundary } from './behavior/ErrorBoundary'
export { default as Text } from './typography/Text'
export { default as LineSeparator } from './layout/LineSeparator'
export { default as Input } from './control/Input'
export { default as SearchHistory } from './dataview/SearchHistory'
export { default as RpositoryItem } from './dataview/RpositoryItem'
export { default as SearchField } from './control/SearchField'
export { default as InteractiveList } from './behavior/InteractiveList'
export { default as ActivityIndicator } from './dataview/ActivityIndicator'
export { default as ItemCard } from './dataview/ItemCard'
