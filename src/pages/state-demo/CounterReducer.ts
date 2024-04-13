export function counterReducer(state: { count: number; }, action: {
    type: string;
    payload?: any;
}) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}