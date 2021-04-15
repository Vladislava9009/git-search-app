import { TResentSearch } from '@typings'
import 'reactn'

declare module 'reactn/default' {
	export interface State {
		recentSearch: TResentSearch[]
	}
}
