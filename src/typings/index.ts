export { NavigationState } from 'react-navigation'
export { TScreenParams } from './navigation'
export { RouteProp } from '@react-navigation/core'
export { TextProps as RNETextProps, AvatarProps } from 'react-native-elements'

export {
	ViewStyle,
	TextStyle,
	TextProps,
	ImageProps,
	FlatListProps,
	SectionListProps,
	SectionListData,
	ViewProps,
	TextInputProps,
	GestureResponderHandlers,
	PanResponderInstance,
	ViewToken,
	TouchableWithoutFeedbackProps,
	GestureResponderEvent,
	TextInputIOSProps,
	TextInputAndroidProps,
	KeyboardType,
	ImageSourcePropType,
	ImageURISource,
	LayoutChangeEvent,
	ScrollViewProps,
	NativeMethodsMixin,
	StyleProp,
	NavState as WebViewNavState,
} from 'react-native'

export type TResentSearch = {
	id: string
	title: string
}

export * from './api'

export type TUsers = {
	total_count: number
	incomplete_results: boolean
	items: TItem[]
}
export type TItem = {
	login: string
	id: 1
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	received_events_url: string
	type: 'User'
	score: number
	following_url: string
	gists_url: string
	starred_url: string
	events_url: string
	site_admin: boolean
}

export type TRepo = {
	total_count: number
	items: TRepoItem[]
}
export type TRepoItem = {
	name: string
	language: string
	description: string
}
