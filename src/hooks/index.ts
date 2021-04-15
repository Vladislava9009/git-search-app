// https://reactjs.org/docs/hooks-reference.html
export {
	useState,
	useEffect,
	useContext,
	useReducer,
	useCallback,
	useMemo,
	useRef,
	useImperativeHandle,
	useLayoutEffect,
	useDebugValue,
} from 'react'

// https://github.com/react-navigation/react-navigation-hooks#docs
export {
	useNavigation, // const { navigate, push, goBack } = useNavigation();
	useRoute, // const { params } = useRoute();
	useFocusEffect, // useFocusEffect(() => null);
	useIsFocused, // const isFocused = useIsFocused();
} from '@react-navigation/core'

export {
	useScrollToTop, // useScrollToTop(scrollViewRef);
} from '@react-navigation/native'

// https://github.com/CharlesStover/reactn#useglobalkeyof-state
export {
	useGlobal, // const [ myNumber, setMyNumber ] = useGlobal('myNumber')
	useDispatch, // const add = useDispatch((count, n) => count + n, 'count'); add(9)
} from 'reactn'

export {
	useSafeArea, // const { top, right, bottom, left } = useSafeArea()
} from 'react-native-safe-area-context'

export { useRequest } from 'react-axios-helpers'

// https://react.i18next.com/latest/usetranslation-hook
export { useTranslation } from 'react-i18next' // const { t, i18n } = useTranslation();

export {
	useDebounce, // const [value] = useDebounce(text, 1000);
	useDebouncedCallback, // useDebouncedCallback(value => null, 1000);
} from 'use-debounce'

export {
	useBoolean, // const { value, setValue, toggle, setTrue, setFalse } = useBoolean()
	useMap, // const { value, set } = useMap([["key", "value"]]);
	useSetState, // const { state, setState, resetState } = useSetState({ loading: false });
	useArray, // const { value, push, unshift, pop, shift, clear, removeIndex, removeById, move } = useArray([])
} from 'react-hanger'
