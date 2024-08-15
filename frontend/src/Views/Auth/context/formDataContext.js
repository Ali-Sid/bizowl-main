import { useState, useEffect } from 'react';

const formDataStore = {
  data: {},
  update: (newData) => {
    formDataStore.data = { ...formDataStore.data, ...newData };
  },
};

const useFormData = () => {
  const [formData, setFormData] = useState(formDataStore.data);

  useEffect(() => {
    setFormData(formDataStore.data);
  }, [formDataStore.data]);

  const updateFormData = (newData) => {
    formDataStore.update(newData);
  };

  return { formData, updateFormData };
};

export default useFormData;
