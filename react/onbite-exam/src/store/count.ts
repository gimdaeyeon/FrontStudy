import {create} from 'zustand';

type CounterStore = {
    count: number,
    actions: {
        increase: () => void,
        decrease: () => void
    }
}

export const useCountStore = create<CounterStore>((set, get) => ({
    count: 0,
    actions: {
        increase: () => {
            set((store) => ({
                count: store.count + 1,
            }));
        },
        decrease: () => {
            set((store) => ({
                count: store.count - 1,
            }));
        }
    }
}));

export const useCount = ()=>{
    return useCountStore(store=>store.count);
}

export const useIncreaseCount = ()=>{
    return useCountStore(store=>store.actions.increase);
}

export const useDecreaseCount = ()=>{
    return useCountStore(store=>store.actions.decrease);
}