import { ImageSourcePropType } from 'react-native'

const Images: IHashMap<ImageSourcePropType> = {}
export interface IHashMap<T> {
	[key: string]: T
}

export default Images
