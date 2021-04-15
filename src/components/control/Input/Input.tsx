import * as React from 'react'
import { useCallback, useEffect, useState } from '@hooks'
import { TextInput } from '@components'
import { TextInputProps, FieldInputProps } from '@typings'
import styles from './styles.css'

const Input: React.FC<TProps> = (
	{
		hidden,
		nextField,
		multiline = false,
		onSubmitEditing,
		onChange,
		style,
		InputComponent = TextInput,
		...textInputProps
	},
	ref,
) => {
	const handleSubmitEditing = useCallback(
		event => {
			nextField?.current?.focus?.()
			onSubmitEditing?.(event)
		},
		[onSubmitEditing],
	)

	// HACK Allow copy/paste text in TextInput on fucked Android (https://github.com/facebook/react-native/issues/9958).
	const [width, setWidth] = useState('99%')
	useEffect(() => void setTimeout(() => setWidth('100%'), 100), [])

	return hidden ? null : (
		<InputComponent
			ref={ref}
			underlineColorAndroid="transparent"
			placeholderTextColor="#8F8F96"
			selectionColor="#E8CF62"
			blurOnSubmit={false}
			autoCapitalize="none"
			style={[styles.input, style, { width }]}
			{...textInputProps}
			multiline={multiline}
			onSubmitEditing={handleSubmitEditing}
			onChangeText={onChange}
		/>
	)
}

type TProps = TextInputProps &
	Partial<FieldInputProps<string>> & {
		hidden?: boolean
		nextField?: React.RefObject<TextInput>
		InputComponent?: React.FC<TextInput>
	}

export default React.forwardRef(Input)
