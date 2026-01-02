import {create} from 'zustand';
import {combine, createJSONStorage, devtools, persist, subscribeWithSelector} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

export const useCountStore = create(
    devtools(
        persist(
            subscribeWithSelector(
                immer(
                    combine({count: 0}, (set, get) => ({
                        actions: {
                            increase: () => {
                                set((state) => {
                                    state.count += 1;
                                })
                            },
                            decrease: () => {
                                set((state) => {
                                    state.count -= 1;
                                })
                            },
                        },
                    })),
                ),
            ),
            {
                name: 'countStore',
                partialize: (store) => ({
                    count: store.count,
                }),
                storage: createJSONStorage(() => sessionStorage)
            },
        ),
        {
            name:'countStore',
        }
    )
);

useCountStore.subscribe(
    (store) => store.count,
    (count, prevCount) => {
        console.log(count, prevCount)
        const store = useCountStore.getState();

    }
);

export const useCount = () => {
    return useCountStore(store => store.count);
}

export const useIncreaseCount = () => {
    return useCountStore(store => store.actions.increase);
}

export const useDecreaseCount = () => {
    return useCountStore(store => store.actions.decrease);
}