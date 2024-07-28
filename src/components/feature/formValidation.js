export const validateForm = (formData, touched, t) => {
  const newErrors = {};
  const { email, name, password, confirmPassword } = formData;

  if (touched.email && !email) {
    newErrors.email = t("pages.register.form.emailEmptyError");
  } else if (touched.email && !/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = t("pages.register.form.emailSyntaxError");
  }

  if (touched.name && !name) {
    newErrors.name = t("pages.register.form.nameEmptyError");
  }

  if (touched.password && !password) {
    newErrors.password = t("pages.register.form.passwordEmptyError");
  } else if (
    touched.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
  ) {
    newErrors.password = t("pages.register.form.passwordRequirementError");
  }

  if (touched.confirmPassword && password !== confirmPassword) {
    newErrors.confirmPassword = t("pages.register.form.confirmPasswordError");
  }

  const isValid = Object.keys(newErrors).length === 0 && 
    touched.name && touched.email && touched.password && touched.confirmPassword;
  return { isValid, newErrors };
};