interface IHashMap<T> {
	[key: string]: T
}

const routes: IHashMap<string> = Object.freeze({
	MAIN_NAVIGATOR: 'MainNavigator',
})

export default routes
