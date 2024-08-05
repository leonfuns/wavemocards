import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import md5 from "md5";
import Form from "../../components/common/Form";
import useForm from "../../hooks/useForm";
import Button from "../../components/common/Button";

const Register = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [generalError, setGeneralError] = useState("");
  const backgroundImage = isDarkMode
    ? "url('/images/bg/bg-login-dark.svg')"
    : "url('/images/bg/bg-login-light.svg')";

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
      const {
        email,
        name,
        password,
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
      navigate("/user/profile");
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
    {
      name: "password",
      type: "password",
      placeholder: "pages.register.form.password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "pages.register.form.confirmPassword",
    },
    {
      name: "birthday",
      type: "date",
      placeholder: "pages.register.form.birthday",
    },
    {
      name: "occupation",
      type: "select",
      placeholder: "pages.register.form.occupations",
      options: [
        "學生",
        "教師",
        "工程師",
        "醫生",
        "律師",
        "商人",
        "藝術家",
        "其他",
        "暫不透露",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t("nav.register")} | {t("footer.copyright")}
        </title>
      </Helmet>
      <div className="relative flex items-center justify-center h-screen md:-mt-[76px] -mt-[100px]">
        <div
          className="relative hidden md:flex flex-grow md:w-1/2 min-h-full bg-local bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage }}
        ></div>
        <div className="md:w-1/2 flex flex-col justify-center items-center py-8 min-h-full">
          <h1 className="relative text-4xl text-gray-100 md:text-[#3c9dae] mb-12">
            {t("pages.register.title")}
          </h1>
          {generalError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{generalError}</span>
            </div>
          )}
          <form
            className="space-y-6 w-60 md:max-w-72"
            onSubmit={handleRegister}
          >
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
            <div className="relative">
              <Button
                text={t("pages.register.form.submit")}
                type="submit"
                variant="register"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
