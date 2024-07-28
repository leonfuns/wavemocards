import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import md5 from "md5";
import Form from "../../components/common/Form";
import useForm from "../../hooks/useForm";

const Register = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [generalError, setGeneralError] = useState("");

  const initialState = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    // birthday: null,
    // occupation: "",
  };

  const {
    formData,
    errors,
    touched,
    isFormValid,
    handleInputChange,
    handleBlur,
    setTouched,
  } = useForm(initialState, t);

  const handleRegister = async (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      name: true,
      password: true,
      confirmPassword: true,
    });
    if (!isFormValid) return;

    try {
      const auth = getAuth();
      const { email, name, password, 
        // birthday, occupation 
      } = formData;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
        email.toLowerCase().trim()
      )}?d=404`;
      const response = await fetch(gravatarUrl);
      if (response.ok) {
        await updateProfile(user, {
          displayName: name,
          photoURL: gravatarUrl,
        });
      }
  
      // console.log("Birthday:", birthday);
      // console.log("Occupation:", occupation);
  
      await login(email, password);
      navigate('/user/profile');
    } catch (error) {
      console.error("Registration error:", error);
      setGeneralError(error.message);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const fields = [
    { name: "email", type: "email", placeholder: "pages.register.form.email" },
    { name: "name", type: "text", placeholder: "pages.register.form.name" },
    { name: "password", type: "password", placeholder: "pages.register.form.password" },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "pages.register.form.confirmPassword",
    },
    { name: "birthday", type: "date", placeholder: "pages.register.form.birthday" },
    {
      name: "occupation",
      type: "select",
      placeholder: "pages.register.form.occupations",
      options: [
        "暫不透露",
        "學生",
        "教師",
        "工程師",
        "醫生",
        "律師",
        "商人",
        "藝術家",
        "其他",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("pages.register.title")}
          </h2>
        </div>
        {generalError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{generalError}</span>
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <Form
            fields={fields}
            formData={formData}
            errors={errors}
            touched={touched}
            showPassword={showPassword}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            togglePasswordVisibility={togglePasswordVisibility}
            t={t}
          />
          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isFormValid
                  ? "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              {t("pages.register.form.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
