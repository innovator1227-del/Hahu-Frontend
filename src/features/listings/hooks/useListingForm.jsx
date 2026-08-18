import { useState } from "react";

const initialForm = {
  title: "",
  price: "",
  category: "Phones",
  description: "",
  images: [],
  brand: "",
  model: "",
  age: "",
  condition: "",
  location: {
    address: "",
    city: "",
    latitude: null,
    longitude: null,
  },
  pickupAvailable: true,
  deliveryAvailable: false,
};

const useListingForm = () => {
  const [form, setForm] = useState(initialForm);

  const updateField = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return {
    form,
    updateField,
    resetForm,
  };
};

export default useListingForm;
