import * as React from 'react'
import { View } from '@components'
import styles from './styles.css'

type TProps = {
	hidden?: boolean
	marginHorizontal?: number
	marginVertical?: number
	height?: number
}

const LineSeparator: React.FC<TProps> = ({ hidden, marginVertical = 24, marginHorizontal = 0, height = 1 }) => {
	return hidden ? null : (
		<View style={{ marginVertical, marginHorizontal }}>
			<View style={[styles.line, { height }]} />
		</View>
	)
}

export default LineSeparator
