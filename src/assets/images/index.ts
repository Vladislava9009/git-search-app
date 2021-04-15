import { ImageSourcePropType } from 'react-native'

const Images: IHashMap<ImageSourcePropType> = {
	LOGO: require('./logo.png'),
}
export interface IHashMap<T> {
	[key: string]: T
}

export default Images
