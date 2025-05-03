// Import Dependencies
import { Link } from "react-router";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; 

// Local Imports
import Logo from "assets/appLogo.svg?react";
import { Button, Card, Checkbox, Input, InputErrorMsg } from "components/ui";
import { schema } from "./schema";
import { Page } from "components/shared/Page";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "username",
      password: "password",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    const formData = new FormData();
    formData.append("identifier", data.username);
    formData.append("password", data.password);
    await axios
      .post("https://test20250503145645-drh2beevhxfthfhw.canadacentral-01.azurewebsites.net/api/User/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "*/*",
        },
      })
      .then(function (response) {
        const token = response.data.token;
        // Store token
        localStorage.setItem("token", token);
        // Set default auth header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // Redirect to dashboard
        window.location.href = "/dashboards/leads";
      })
      .catch(function (error) {
        console.error("Login error:", error);
        // Handle different error cases
        if (error.response) {
          // Server responded with error status (4xx, 5xx)
          setError("root", {
            type: "manual",
            message: error.response.data.message || "Login failed",
          });
        } else if (error.request) {
          // Request was made but no response received
          setError("root", {
            type: "manual",
            message: "Network error - please try again",
          });
        } else {
          // Other errors
          setError("root", {
            type: "manual",
            message: "An unexpected error occurred",
          });
        }
      });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage:
          "url(https://res.cloudinary.com/kakani7/image/upload/v1746165081/MSI/n0virwrf54za0cynyy3w.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Frosted Glass Effect Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Transparent white for frosted effect
          backdropFilter: "blur(5px)", // Apply blur effect to the background
          zIndex: 0, // Make sure it stays behind the content
        }}
      />
      <Page title="Login">
        <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            
            <Card className="mt-5 rounded-lg p-5 lg:p-7 bg-white bg-opacity-10 backdrop-blur-md text-black shadow-lg">
                 <div className="text-center">
              <Logo className="mx-auto w-full h-auto max-w-xs" viewBox="1 0 200" />
            </div>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div className="space-y-4 ">
                  <Input
                    className="text-grey"
                    label="Username"
                    placeholder="Enter Username"
                    prefix={
                      <EnvelopeIcon className="size-5 transition-colors duration-200" strokeWidth="1" />
                    }
                    {...register("username")}
                    error={errors?.username?.message}
                  />
                  <Input
                    className="text-grey"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    prefix={
                      <LockClosedIcon className="size-5 transition-colors duration-200" strokeWidth="1" />
                    }
                    {...register("password")}
                    error={errors?.password?.message}
                  />
                </div>

                <div className="mt-2">
                  <InputErrorMsg when={errors?.root?.message}>{errors?.root?.message}</InputErrorMsg>
                </div>

                <div className="mt-4 flex items-center justify-between space-x-2">
                  <Checkbox label="Remember me" />
                  <a
                    href="##"
                    className="text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
                  >
                    Forgot Password?
                  </a>
                </div>

                <Button type="submit" className="mt-5 w-full" color="primary">
                  Sign In
                </Button>
              </form>
              <div className="mt-4 text-center text-xs-plus">
                <p className="line-clamp-1">
                  <span>Dont have Account?</span>{" "}
                  <Link
                    className="text-primary-600 transition-colors hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
                    to="/pages/sign-up-v1"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </Card>
            <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-dark-300">
              <a href="##">Privacy Notice</a>
              <div className="mx-2.5 my-0.5 w-px bg-gray-200 dark:bg-dark-500"></div>
              <a href="##">Term of service</a>
            </div>
          </div>
        </main>
      </Page>
    </div>
  );
}
