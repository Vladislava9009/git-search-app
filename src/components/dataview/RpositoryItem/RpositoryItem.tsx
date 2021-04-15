import * as React from 'react'
import { useCallback, useMemo } from '@hooks'
import { View } from '@components'
import styles from './styles.css'

type TProps = {
	hidden?: boolean
}

const RpositoryItem: React.FC<TProps> = ({ hidden }) => {
	return hidden ? null : <View>{/* content */}</View>
}

export default RpositoryItem
