import { useState, useEffect, useCallback } from 'react';
import { validateForm } from '../components/feature/formValidation';

const useForm = (initialState, t) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  useEffect(() => {
    const { isValid, newErrors } = validateForm(formData, touched, t);
    setErrors(newErrors);
    setIsFormValid(isValid);
  }, [formData, touched, t]);

  return {
    formData,
    errors,
    touched,
    isFormValid,
    handleInputChange,
    handleBlur,
    setTouched
  };
};

export default useForm;