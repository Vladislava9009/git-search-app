import * as React from 'react'
import { useCallback, useMemo } from '@hooks'
import { Text } from '@components'
import styles from './styles.css'
import { TouchableOpacity } from 'react-native'
import { TRepoItem } from '@typings'

type TProps = {
	hidden?: boolean
	name: TRepoItem['name']
	language: TRepoItem['language']
	description: TRepoItem['description']
}

const ItemCard: React.FC<TProps> = ({ hidden, name, language, description = '' }) => {
	return hidden ? null : (
		<TouchableOpacity style={styles.container}>
			<Text numberOfLines={1} style={styles.name}>
				{name}
			</Text>
			<Text style={styles.name} numberOfLines={1}>
				Language: {language}
			</Text>
			<Text style={styles.name} numberOfLines={4}>
				Description: {description}
			</Text>
		</TouchableOpacity>
	)
}

export default ItemCard
