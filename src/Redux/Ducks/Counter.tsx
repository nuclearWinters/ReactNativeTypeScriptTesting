import {RootState} from '../Reducers/Reducers';
import {ThunkAction} from 'redux-thunk';
/* Reducer */
const initialState: CounterState = {
  integer: 0,
  string: '¡Cambia el estado en Redux!',
};

interface CounterState {
  integer: number;
  string: string;
}

/* TYPES */
const DECREASE_COUNTER = 'DECREASE_COUNTER';
const INCREASE_COUNTER = 'INCREASE_COUNTER';
const SET_COUNTER = 'SET_COUNTER';
const SET_STRING = 'SET_STRING';

interface IncreaseCounter {
  type: typeof INCREASE_COUNTER;
}

interface DecreaseCounter {
  type: typeof DECREASE_COUNTER;
}

interface SetCounter {
  type: typeof SET_COUNTER;
  payload: number;
}

interface SetString {
  type: typeof SET_STRING;
  payload: string;
}

export type CounterActionTypes =
  | DecreaseCounter
  | IncreaseCounter
  | SetCounter
  | SetString;

const decreaseCounter = (): DecreaseCounter => ({
  type: DECREASE_COUNTER,
});

const increaseCounter = (): IncreaseCounter => ({
  type: INCREASE_COUNTER,
});

const setCounter = (payload: number): SetCounter => ({
  type: SET_COUNTER,
  payload,
});

const setString = (payload: string): SetString => ({
  type: SET_STRING,
  payload,
});

const awaitedSetTimeout2 = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 5000);
});

const mockFetch = (): ThunkAction<
  Promise<number>,
  RootState,
  undefined,
  CounterActionTypes
> => {
  return async (dispatch, getState) => {
    let {
      counter: {integer},
    } = getState();
    try {
      const response = await awaitedSetTimeout2;
      dispatch(setCounter(integer + 10));
      return response;
    } catch (e) {
      return e;
    }
  };
};

export const reducer = (
  state = initialState,
  action: CounterActionTypes,
): CounterState => {
  switch (action.type) {
    case DECREASE_COUNTER:
      return {...state, integer: state.integer - 1};
    case INCREASE_COUNTER:
      return {...state, integer: state.integer + 1};
    case SET_COUNTER:
      return {...state, integer: action.payload};
    case SET_STRING:
      return {...state, string: action.payload};
    default:
      return state;
  }
};

export {decreaseCounter, increaseCounter, setCounter, setString, mockFetch};
