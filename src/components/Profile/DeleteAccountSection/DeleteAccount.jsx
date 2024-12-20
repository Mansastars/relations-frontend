import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#ff5252"),
  },
});

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('')

  useEffect(()=>{
    const account = JSON.parse(localStorage.getItem('user'))
    setAccountType(account.role)
    console.log(account.role)
  })
  // Delete Account
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          screen;
          await api.delete(`users/delete-account`);
          Swal.fire("Deleted!", "Your account has been deleted.", "success");
          localStorage.clear()
          navigate("/auth/sign_up"); 
        } catch (error) {
          console.error("Error:", error);
          Swal.fire("Error", "Failed to delete user", "error");
        }
      }
    });
  };

  const handleSwitchAccount = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can also switch back anytime",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          screen;
          const response = await api.post(`company/switch-account-type`);
          Swal.fire("", "Your account has been successfully switched, Please login", "success");
          localStorage.clear()
          navigate("/auth/login");
        } catch (error) {
          console.error("Error:", error);
          Swal.fire("Error", "Failed to switch account", "error");
        }
      }
    });
  };

  return (
    <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
      <div
        className={`bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full`}
      >
        <div className=" w-full ">
          <div className=" flex flex-col gap-5 pb-8 max-sm:flex-col">
            <div className=" flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-green-500">
                Switch account type
              </h1>
              <p className="text-dark-blue text-base font-semibold">
                By clicking the button below, you are switching your account type to {accountType === 'Company'? 'User':'Company'}. Are you sure you want to proceed?
              </p>
            </div>
            <div className=" mt-5 flex justify-center">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  className=" w-[80%] max-md:w-full"
                  color="success"
                  type="button"
                  onClick={() => handleSwitchAccount()}
                  // disabled={emailIsSubmitting && true}
                >
                  Switch account
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full`}
      >
        <div className=" w-full ">
          <div className=" flex flex-col gap-5 pb-8 max-sm:flex-col">
            <div className=" flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-red-500">
                Delete Account
              </h1>
              <p className="text-dark-blue text-base font-semibold">
                By clicking the button below, you will permanently delete your
                account. Are you sure you want to proceed?
              </p>
            </div>
            <div className=" mt-5 flex justify-center">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  className=" w-[80%] max-md:w-full"
                  color="mainColor"
                  type="button"
                  onClick={() => handleDelete()}
                  // disabled={emailIsSubmitting && true}
                >
                  Delete Account
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DeleteAccount;
