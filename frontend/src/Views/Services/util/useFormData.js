import { createStore, useStore } from 'zustand';

const formDataStore = createStore((set) => ({
  formData: {},
  updateFormData: (newData) =>
    set((state) => ({ formData: { ...state.formData, ...newData } })),
}));

const useFormData = () => {
  const { formData, updateFormData } = useStore(formDataStore);

  return { formData, updateFormData };
};

export default useFormData;
