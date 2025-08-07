// stores/useStepStore.js
import { create } from 'zustand';

const useNameOrderStore = create((set) => ({
    step: "Buy a template",
    setStep: (newStep) => {
        set({ step: newStep });
    },
}));

export default useNameOrderStore;
