import {create} from 'zustand';
import {combine} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

export const useCountStore = create(
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
    )
);

// export const useCountStore = create<CounterStore>((set, get) => ({
//     count: 0,
//     actions: {
//         increase: () => {
//             set((store) => ({
//                 count: store.count + 1,
//             }));
//         },
//         decrease: () => {
//             set((store) => ({
//                 count: store.count - 1,
//             }));
//         }
//     }
// }));

export const useCount = () => {
    return useCountStore(store => store.count);
}

export const useIncreaseCount = () => {
    return useCountStore(store => store.actions.increase);
}

export const useDecreaseCount = () => {
    return useCountStore(store => store.actions.decrease);
}