import * as React from 'react'
import { VirtualizedListWithoutRenderItemProps } from 'react-native'
import { useCallback, useMemo, useState, useRef, useEffect, useImperativeHandle } from '@hooks'
import { View, ActivityIndicator, FlatList } from '@components'
import { debounce } from '@helpers'
import styles from './styles.css'

function formatLoadArgs<TPayload>(page: number, limit: TLoadArgs['limit'], payload: any): TLoadArgs & TPayload {
	return {
		// page,
		per_page: limit,
		page,
		...payload,
	}
}

function InteractiveList<TPayload>(
	{
		children,
		onLoad,
		totalCounts,
		limit = 10,
		payload = undefined,
		// Optional callbacks
		onPullToRefresh,
		onInitialLoad,
		onLoadNext,
		waitForFirstScroll = true,
		initialPage = 1,
		onEndReachedThreshold = 0.5,
		debounceDelay = 500,
		canCauseLoadNext,
		indicator,
	}: TProps<TPayload>,
	interactiveListRef,
) {
	// Common.
	const listRef = useRef<FlatList<any>>()
	const page = useRef<number>(initialPage)
	const canLoadNext = canCauseLoadNext ? canCauseLoadNext() : !totalCounts || (page.current + 1) * limit < totalCounts

	// Methods.
	useImperativeHandle(
		interactiveListRef,
		() => ({
			/** Silent refetching of list content without any loaders */
			update: async () => await onLoad(formatLoadArgs<TPayload>(0, limit * (page?.current + 1), payload)),
		}),
		[limit, payload, onLoad],
	)

	// Pull-to-refresh
	const [refreshing, setRefreshing] = useState<boolean>(false)
	const onRefresh = useCallback(
		debounce(async () => {
			if (refreshing) return
			setRefreshing(true)
			page.current = 0
			onPullToRefresh && (await onPullToRefresh(formatLoadArgs<TPayload>(page.current, limit, payload)))
			await onLoad(formatLoadArgs(page.current, limit, payload))
			setRefreshing(false)
		}, debounceDelay),
		[refreshing, page, limit, onPullToRefresh, onLoad, payload],
	)

	const initialLoad = useCallback(async () => {
		setLazyLoading(true)
		page.current = 0
		listRef.current?.scrollToOffset?.({ offset: 0, animated: true })
		onInitialLoad && (await onInitialLoad(formatLoadArgs<TPayload>(page.current, limit, payload)))
		await onLoad(formatLoadArgs(page.current, limit, payload))
		setLazyLoading(false)
	}, [onLoad, payload])

	// Initial load or change payload
	useEffect(() => {
		initialLoad()
	}, [payload])

	// Lazy load
	const [lazyLoading, setLazyLoading] = useState<boolean>(waitForFirstScroll)
	const lazyLoadDisabled = useRef<boolean>(false) // FlatList wasn't scrolled. Using for deny call onLoadNext() on render list.
	const setLazyLoadDisabling = useCallback(() => (lazyLoadDisabled.current = false), [])
	const handleEndReached = useCallback(
		debounce(async () => {
			if (lazyLoading || !canLoadNext || lazyLoadDisabled.current) return
			setLazyLoading(true)
			page.current++
			onLoadNext && (await onLoadNext(formatLoadArgs<TPayload>(page.current, limit, payload)))
			await onLoad(formatLoadArgs<TPayload>(page.current, limit, payload))
			setLazyLoading(false)
		}, debounceDelay),
		[lazyLoading, canLoadNext, onLoadNext, onLoad, payload],
	)

	const listProps = useMemo(
		() => ({
			ref: listRef,
			// Lazy load
			onEndReachedThreshold,
			onEndReached: handleEndReached,
			ListFooterComponent: (
				<View style={styles.footerContainer}>{lazyLoading ? indicator || <ActivityIndicator /> : null}</View>
			),
			onMomentumScrollBegin: setLazyLoadDisabling,
			onScrollBeginDrag: setLazyLoadDisabling,
			// Pull-to-refresh
			refreshing,
			onRefresh,
		}),
		[refreshing, lazyLoading, handleEndReached],
	)

	return children(listProps)
}

type TRenderProps = Pick<
	VirtualizedListWithoutRenderItemProps<any>,
	| 'onEndReached'
	| 'onEndReachedThreshold'
	| 'ListFooterComponent'
	| 'onMomentumScrollBegin'
	| 'onScrollBeginDrag'
	| 'refreshControl'
>

type TProps<TPayload extends Object | undefined> = {
	/** Render props function called with FlatList props object as first argument  */
	children: (listProps: TRenderProps) => any
	/** Callback called on list mount, list end reached and pull-to-refresh */
	onLoad: (loadArgs: TLoadArgs & TPayload) => Promise<any>
	/** Immutable (!) object with params merged with pagination params which will be passed to every onLoad callback.  If you change payload onLoad-callback will be called. */
	payload?: TPayload
	/** Total items amount which can be loaded */
	totalCounts?: number
	/** Number of items requested at a time. */
	limit?: TLoadArgs['limit']
	/** Prevent twice loading on FlatList/SectionList */
	waitForFirstScroll?: boolean
	/** Function detect should */
	canCauseLoadNext?: () => boolean
	onInitialLoad?: (loadArgs: TLoadArgs & TPayload) => Promise<any>
	onPullToRefresh?: (loadArgs: TLoadArgs & TPayload) => any
	onLoadNext?: (loadArgs: TLoadArgs & TPayload) => Promise<any>
	initialPage?: number
	onEndReachedThreshold?: number
	debounceDelay?: number
	indicator?: any
}

export type TLoadArgs = {
	// page: number
	limit: number
	offset: number
}

export default React.forwardRef(InteractiveList)
