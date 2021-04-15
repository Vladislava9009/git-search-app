import * as React from 'react'
import { useState, useEffect, useDebouncedCallback, useCallback, useGlobal } from '@hooks'
import { View, Input } from '@components'
import styles from './styles.css'
import { StyleProp, ViewStyle } from '@typings'

const hitSlop = { top: 16, right: 16, bottom: 16, left: 16 }

const SearchField: React.FC<TProps> = ({
	hidden,
	value = '',
	delay = 300,
	onChange,
	placeholder = '',
	onSubmitEditing,
	style,
	...props
}) => {
	const [query, setQuery] = useState<string>(value)
	useEffect(() => setQuery(value), [value])
	const [callOnChange] = useDebouncedCallback(value => onChange(value), delay)

	const handleChange = useCallback(
		value => {
			callOnChange(value)
			setQuery(value)
		},
		[onChange],
	)
	const onReset = useCallback(() => handleChange(''), [])

	return hidden ? null : (
		<View style={[styles.inputContainer, style]}>
			<Input
				placeholder={placeholder}
				style={styles.input}
				value={query}
				selectTextOnFocus={true}
				returnKeyType="search"
				onChange={handleChange}
				blurOnSubmit={true}
				onSubmitEditing={onSubmitEditing}
			/>
		</View>
	)
}

type TProps = {
	hidden?: boolean
	value: string | undefined
	onChange: (value: string) => void
	delay?: number
	placeholder?: string
	onSubmitEditing?: () => void
	style?: StyleProp<ViewStyle>
}

export default SearchField
