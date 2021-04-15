import * as React from 'react'
import { ScrollView, Text, View } from '@components'
import styles from './styles.css'
import { TResentSearch } from '@typings'

type TProps = {
	hidden?: boolean
	history: TResentSearch[]
}

const SearchHistory: React.FC<TProps> = ({ hidden, history }) => {
	return hidden ? null : (
		<View style={styles.container}>
			<Text style={styles.title}>Search History:</Text>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				keyboardShouldPersistTaps="handled"
				bounces={false}
			>
				{history?.map(item => (
					<Text style={styles.text} key={item.id}>
						{item.title}
					</Text>
				))}
			</ScrollView>
		</View>
	)
}

export default SearchHistory
