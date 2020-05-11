import {combineReducers} from 'redux';
import {Counter} from '../Ducks';
import {useSelector, TypedUseSelectorHook} from 'react-redux';

const rootReducer = combineReducers({
  counter: Counter.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
