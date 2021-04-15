import * as React from 'react'
import {
	ErrorBoundary,
	Text,
	Image,
	View,
	LineSeparator,
	SearchField,
	SearchHistory,
	SafeAreaView,
	InteractiveList,
	FlatList,
	ItemCard,
} from '@components'
import { TRepo, TItem, TScreenParams, TUsers } from '@typings'
import styles from './styles.css'
import { useCallback, useMemo, useNavigation, useRequest, useState, useArray, useGlobal } from '@hooks'
import { StackNavigationProp } from '@react-navigation/stack'
import images from '@images'
import { api } from '@services'
import { pushItemsToArray } from '@helpers'

const RepositoriesScreen: React.FC<TProps> = () => {
	const { navigate } = useNavigation<TProps['navigation']>()
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [recentSearch, setResentSearch] = useGlobal('recentSearch')

	const payload = useMemo(() => (searchQuery ? { q: searchQuery } : null), [searchQuery])

	const { value: userList, setValue: setList, push: pushListItems } = useArray<any>([])

	const { fetching, fetched, fetch: fetchUsers } = useRequest<TUsers, any>({
		request: searchQuery => api.searchUser(searchQuery),
		onSuccess: ({ items }, params) => (params?.page ? pushListItems(items) : setList(items)),
	})
	// Since it was not specified in the task description whether a default route should be used for the search, I did not use any.
	const { value: repoList, setValue: setRepoList, push: pushRepoListItems } = useArray<any>([])
	const { data, fetch: fetchRepo } = useRequest<TRepo, any>({
		request: searchQuery ? api.searchRepo : api.getOrganizations,
		onSuccess: ({ items }, { page, q }) => {
			page ? pushRepoListItems(items) : setRepoList(items)
			setResentSearch(pushItemsToArray(q, recentSearch))
		},
	})

	const renderItem = useCallback(({ item }: { item: TItem }) => <ItemCard {...item} />, [repoList])

	const keyExtractor = useCallback(item => String(item.id), [])

	return (
		<ErrorBoundary>
			<SafeAreaView style={styles.contentContainer}>
				<Image style={styles.logoImage} source={images.LOGO} resizeMode="center" />
				<Text h2>Github users search app</Text>
				<LineSeparator />
				<SearchField value={searchQuery} onChange={setSearchQuery} delay={400} placeholder={'Search ...'} />
				<SearchHistory history={recentSearch} hidden={!recentSearch.length} />
				{searchQuery ? (
					<InteractiveList
						payload={payload}
						onLoad={fetchRepo as any}
						limit={24}
						totalCounts={data?.total_count}
					>
						{listProps => (
							<FlatList
								data={repoList}
								renderItem={renderItem}
								keyExtractor={keyExtractor}
								extraData={null}
								contentContainerStyle={styles.listContainer}
								keyboardShouldPersistTaps="handled"
								bounces={false}
								{...listProps}
							/>
						)}
					</InteractiveList>
				) : (
					<View style={styles.emptyContainer}>
						<Text h2>You have to search something, to see the results...</Text>
					</View>
				)}
			</SafeAreaView>
		</ErrorBoundary>
	)
}

type TProps = {
	navigation: StackNavigationProp<TScreenParams, 'Repositories'>
	// route: RouteProp<TScreenParams, 'Repositories'>
}

export default RepositoriesScreen
