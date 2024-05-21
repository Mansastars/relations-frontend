import { Button, FormInputRequired, SignUpRequired } from "../Reusables";
import { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOff } from "lucide-react";
import PrivacyPolicModal from "./PrivacyPolicModal";
import TermOfUsageModal from "./TermOfUsageModal";
import checkPasswordStrength from "../ReusableComponents/checkPasswordStrength";
import ConfirmEmail from "./ConfirmEmail";

function SignUp() {
  // Connection wth backend and error and success handling
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [ConfirmVisible, setConfirmVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openTermOfUsageModal, setOpenTermOfUsageModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const [openConfirmEmailModal, setOpenConfirmEmailModal] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));

      const strength = checkPasswordStrength(formValue.password);
      setPasswordStrength(strength);
      setCanSubmit(strength >= 2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      confirm_password: formValue.confirmPassword,
    };

    try {
      if (canSubmit) {
        await api.post("/users/register", userData);
        setOpenConfirmEmailModal(true);
      } else {
        setErrorMessage("Password must be at least eight characters long.");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again."); // set generic error message
      }
      window.scrollTo(0, 0); //scroll to the top of the page
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const closeModal = () => {
    setFormValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setOpenConfirmEmailModal(false);
    navigate("/auth/login");
  };

  // Password
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  // Confirm Password
  const toggleConfirmVisibility = () => {
    setConfirmVisible(!ConfirmVisible);
  };

  return (
    <div className="mx-2 flex justify-center">
      <div className="bg-white p-5 md:p-16 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-lg:w-[70%] max-md:w-[90%]">
        <div className=" flex flex-col gap-5 h-fit ">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-dark-blue font-extrabold text-5xl mb-5">
              Sign Up
            </h1>
            <p className=" text-base text-dark-blue">
              You have an account{" "}
              <Link
                to="/auth/login"
                className=" text-mansa-blue hover:text-dark-blue"
              >
                <u>Log In</u>
              </Link>
            </p>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 justify-center items-center "
          >
            <div className=" w-full flex flex-col gap-5">
              {errorMessage && (
                <p className=" text-red-500 font-semibold text-center">
                  {errorMessage}
                </p>
              )}
              <div className=" flex gap-5 max-sm:flex-col">
                <div className=" w-full">
                  <SignUpRequired
                    type="text"
                    title="First Name*"
                    placeholder="Sundi"
                    id="firstName"
                    autoComplete="first-name"
                    value={formValue.firstName}
                    onChange={handleInput}
                  />
                </div>
                <div className=" w-full">
                  <SignUpRequired
                    type="text"
                    title="Last Name*"
                    placeholder="Joe"
                    id="lastName"
                    autoComplete="last-name"
                    value={formValue.lastName}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col gap-5">
                <SignUpRequired
                  type="email"
                  title="Email*"
                  placeholder="SundiJoe@gmail.com"
                  id="email"
                  autoComplete="email"
                  value={formValue.email}
                  onChange={handleInput}
                />

                <div>
                  <SignUpRequired
                    type={visible ? "text" : "password"}
                    title="Password*"
                    id="password"
                    value={formValue.password}
                    placeholder="•••••••••"
                    onChange={handleInput}
                    icon={
                      visible ? (
                        <EyeIcon size={16} onClick={toggleVisibility} />
                      ) : (
                        <EyeOff size={16} onClick={toggleVisibility} />
                      )
                    }
                  />
                  {/* Display password strength */}
                  {passwordStrength > 0 && (
                    <p
                      className={`text-sm ${
                        passwordStrength >= 2
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {passwordStrength >= 2
                        ? "Strong password"
                        : "Weak password"}
                    </p>
                  )}
                </div>

                <SignUpRequired
                  type={ConfirmVisible ? "text" : "password"}
                  title="Confirm Password*"
                  id="confirmPassword"
                  placeholder="•••••••••"
                  value={formValue.confirmPassword}
                  onChange={handleInput}
                  icon={
                    ConfirmVisible ? (
                      <EyeIcon size={16} onClick={toggleConfirmVisibility} />
                    ) : (
                      <EyeOff size={16} onClick={toggleConfirmVisibility} />
                    )
                  }
                />

                <div className=" flex flex-row gap-2 items-center">
                  <input
                    type="checkbox"
                    name="T&C"
                    required
                    className=" text-mansa-blue"
                  />
                  <p className=" text-xs">
                    Yes, I agree to the{" "}
                    <span
                      onClick={() => setOpenModal(true)}
                      className=" text-mansa-blue underline cursor-pointer hover:text-dark-blue"
                    >
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span
                      onClick={() => setOpenTermOfUsageModal(true)}
                      className=" text-mansa-blue underline cursor-pointer hover:text-dark-blue"
                    >
                      Terms of Usage
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              text={loading ? "Signing Up..." : "Sign Up"}
              disabled={loading}
              className=" max-md:w-full"
            />
          </form>
        </div>
      </div>
      <PrivacyPolicModal open={openModal} onClose={() => setOpenModal(false)} />
      <TermOfUsageModal
        open={openTermOfUsageModal}
        onClose={() => setOpenTermOfUsageModal(false)}
      />

      {setOpenConfirmEmailModal && (
        <ConfirmEmail
          userEmail={formValue.email}
          onClose={closeModal}
          show={openConfirmEmailModal}
        />
      )}
    </div>
  );
}

export default SignUp;
