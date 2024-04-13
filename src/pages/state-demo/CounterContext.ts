import { createContext, Dispatch } from 'react';

interface CounterState {
    count: number;
}

interface CounterAction {
    type: string;
    payload?: any;
}

export const CounterContext = createContext<{
    state: CounterState;
    dispatch: Dispatch<CounterAction>;
}>({
    state: { count: 0 },
    dispatch: () => undefined
});


