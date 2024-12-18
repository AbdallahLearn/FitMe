import Header from "../component/Header";
import "../App.css";
import man from "../assets/man.png";
import avatar from "../assets/avatar.png";
import colorPalette from "../assets/color-palette.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import axios from "axios";
import Swal from "sweetalert2";
import warm from "../../public/images/warm.png";
import cool from "../../public/images/cool.png";
import neutral from "../../public/images/neutral.png";
import { Link } from "react-router-dom";
function ProfileForm() {
  // Variables //
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  //=== Variables ===//

  // Use State Variables //
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [nameCheck, setNameCheck] = useState("");
  const [displayName, setDisplayName] = useState("none");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [displayEmail, setDisplayEmail] = useState("none");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [displayPass, setDisplayPass] = useState("none");

  const [userDetails, setUserDetails] = useState([]);

  //== Use State Variables ==//

  // Get User //
  const getUser = () => {
    axios
      .get(`https://fitme-4pk3.onrender.com/users/user/${id}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.error(
          "Error Fetching User Data:",
          error.response ? error.response.data : error.message
        );
      });
  };

  //=== Get User ===//
  const [userDataInfo, setUserDataInfo] = useState([]);
  const getPersonalData = () => {
    axios
      .get(`https://fitme-4pk3.onrender.com/models/userModel/${id}`)
      .then((response) => {
        console.log("editing by Abdullah Jhn: ", response.data);
        setUserDataInfo(response.data);
      })
      .catch((error) =>
        console.error("Error checking model existence:", error)
      );
  };

  // Use Effect //
  useEffect(() => {
    // Check If User Is Logged In //
    if (localStorage.getItem("userId") === null) {
      navigate("/");
    }
    //=== Check If User Is Logged In ===//

    // Get User Function //
    getUser();
    getPersonalData();

    //=== Get User Function ===//

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //=== Use Effect ===//
  // Name //
  const showUpName = () => {
    if (displayName == "none") {
      setDisplayName("block");
    } else {
      setDisplayName("none");
    }
  };

  const updateNamefalse = () => {
    setDisplayName("none");
  };

  // Schema Name validation using zod
  const schemaName = z.object({
    name: z
      .string()
      .min(4, { message: "Name should be more than 3 characters." })
      .regex(/^[A-Za-z\u0600-\u06FF ]+$/, {
        message: "Name should only contain Arabic or English letters.",
      }),
  });

  const updateNameTrue = () => {
    setNameErr("");
    setEmailErr("");

    const validationResult = schemaName.safeParse({ name });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      const { path, message } = firstError;

      if (path[0] === "name") {
        setNameErr(message);
        setTimeout(() => setNameErr(""), 3000);
      }
    } else {
      axios
        .put(`https://fitme-4pk3.onrender.com/users/update-name/${id}`, {
          newName: name,
        })
        .then((response) => {
          const result = response.data;
          console.log("Response From Server:", result);

          if (result) {
            setNameCheck("Your Name Changed");
            getUser();
            setTimeout(() => {
              setNameCheck("");
              setDisplayName("none");
            }, 1000);
          } else {
            setNameErr("Your Name Not Changed");
            setTimeout(() => setNameErr(""), 3000);
          }
        })
        .catch((error) => {
          console.error(
            "Error During Name Reset:",
            error.response ? error.response.data : error.message
          );
          setNameErr("An Error Occurred. Please Try Again.");
          setTimeout(() => setNameErr(""), 3000);
        });
    }
  };
  //=== Name ===//

  // Email //
  const showUpEmail = () => {
    if (displayEmail == "none") {
      setDisplayEmail("block");
    } else {
      setDisplayEmail("none");
    }
  };

  const updateEmailfalse = () => {
    setDisplayEmail("none");
  };

  // Schema Email validation using zod
  const schemaEmail = z.object({
    email: z.string().email({ message: "Please Enter a Valid Email Address." }),
  });

  const updateEmailTrue = () => {
    const validationResult = schemaEmail.safeParse({ email });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      const { path, message } = firstError;

      if (path[0] === "email") {
        setEmailErr(message);
        setTimeout(() => setEmailErr(""), 3000);
      }
    } else {
      axios
        .put(`https://fitme-4pk3.onrender.com/users/update-email/${id}`, {
          newEmail: email,
        })
        .then((response) => {
          const result = response.data;
          console.log("Response From Server:", result);

          if (result) {
            setEmailCheck("Your Email Changed");
            getUser();
            setTimeout(() => {
              setEmailCheck("");
              setDisplayEmail("none");
            }, 1000);
          } else {
            setEmailErr("Your Email Not Changed");
            setTimeout(() => setEmailErr(""), 3000);
          }
        })
        .catch((error) => {
          console.error(
            "Error During Email Reset:",
            error.response ? error.response.data : error.message
          );
          setEmailErr("An Error Occurred. Please Try Again.");
          setTimeout(() => setEmailErr(""), 3000);
        });
    }
  };
  //=== Email ===//

  // Password //
  const showUpPass = () => {
    if (displayPass == "none") {
      setDisplayPass("block");
    } else {
      setDisplayPass("none");
    }
  };

  const updatePassfalse = () => {
    setDisplayPass("none");
  };

  // Schema Password validation using zod
  const schemaPass = z.object({
    password: z
      .string()
      .min(8, { message: "Password Must Be at Least 8 Characters Long." })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "Password Must Include Uppercase, Lowercase, a Number, and a Special Character.",
      }),
  });

  const updatePassTrue = () => {
    const validationResult = schemaPass.safeParse({ password });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      const { path, message } = firstError;

      if (path[0] === "password") {
        setPasswordErr(message);
        setTimeout(() => setPasswordErr(""), 3000);
      }
    } else {
      axios
        .put(`https://fitme-4pk3.onrender.com/users/update-password/${id}`, {
          newPassword: password,
        })
        .then((response) => {
          const result = response.data;
          console.log("Response From Server:", result);

          if (result) {
            setPasswordCheck("Your Password Changed");
            setTimeout(() => {
              setPasswordCheck("");
              setDisplayPass("none");
            }, 1000);
          } else {
            setPasswordErr("Your Password Not Changed");
            setTimeout(() => setPasswordErr(""), 3000);
          }
        })
        .catch((error) => {
          console.error(
            "Error During Password Reset:",
            error.response ? error.response.data : error.message
          );
          setPasswordErr("An Error Occurred. Please Try Again.");
          setTimeout(() => setPasswordErr(""), 3000);
        });
    }
  };
  //=== Password ===//

  // Delete Account //
  const handleDeleteAccount = () => {
    if (!id) {
      console.error("User ID is Missing");
      Swal.fire("Error!", "User ID is Missing.", "error");
      return;
    }

    Swal.fire({
      title: "Are You Sure ?",
      text: "You Won't Be Able to Revert This!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE0000",
      cancelButtonColor: "#999999",
      confirmButtonText: "Yes, Delete It!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://fitme-4pk3.onrender.com/users/del-user/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire({
              title: "Deleted!",
              text: "Your Account Has Been Deleted.",
              icon: "success",
              confirmButtonColor: "#3d9042",
            }).then(() => {
              localStorage.clear();
              navigate("/");
            });
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There Was a Problem Deleting Your Account.",
              "Error"
            );
            console.error("Delete Account Error:", error);
          });
      }
    });
  };

  const handleDeleteModel = () => {
    if (!id) {
      console.error("User ID is Missing");
      Swal.fire("Error!", "User ID is Missing.", "error");
      return;
    }

    Swal.fire({
      title: "Are You Sure?",
      text: "You Won't Be Able to Revert This!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE0000",
      cancelButtonColor: "#999999",
      confirmButtonText: "Yes, Delete It!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://fitme-4pk3.onrender.com/models/delete-model/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire({
              title: "Deleted!",
              text: "Your Model Has Been Deleted.",
              icon: "success",
              confirmButtonColor: "#3d9042",
            }).then(() => {
              getPersonalData();
              navigate("/generate-model");
            });
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There Was a Problem Deleting Your Model.",
              "error"
            );
            console.error("Delete Model Error:", error);
          });
      }
    });
  };

  //=== Delete Account ===//

  // Display //
  let displayNameErr = "none";
  let displayEmErr = "none";
  let displayPassErr = "none";
  let displayNameCheck = "none";
  let displayEmailCheck = "none";
  let displayPassCheck = "none";

  if (nameErr != "") {
    displayNameErr = "block";
  }

  if (emailErr != "") {
    displayEmErr = "block";
  }

  if (passwordErr != "") {
    displayPassErr = "block";
  }

  if (nameCheck != "") {
    displayNameCheck = "block";
  }

  if (emailCheck != "") {
    displayEmailCheck = "block";
  }

  if (passwordCheck != "") {
    displayPassCheck = "block";
  }
  //=== Display ===//

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col gap-6 overflow-y-visible bg-[#EEE6E6] px-8">
        <div className="flex lg:flex-row flex-col gap-4 items-center ">
          <div className="flex flex-col w-full gap-6 h-full lg:mt-32 flex-1 max-sm:mt-10     ">
            <h1 className="text-4xl mb-10 ">Account</h1>
            <label htmlFor="name" className="text-xl font-extrabold">
              Your Name
            </label>

            <div className="border-2 text-lg font-bold rounded-xl p-4 bg-[#D9D9D9]/70 flex flex-row justify-between items-center">
              <h1 className="text-[#999898]">{userDetails.name}</h1>

              <i
                onClick={showUpName}
                className="cursor-pointer fa-solid fa-pen-to-square text-xl fa-fw font-bold text-[#EE8B48] hover:text-[#EE8B00]"
              ></i>
            </div>

            <div style={{ display: displayName }}>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                id="name"
                placeholder="Enter Your New Name"
                className="w-full mb-2 border-2 text-lg font-bold rounded-xl p-4"
              />

              <span
                style={{ display: displayNameErr }}
                className="text-red-600 text-sm text-center w-full rounded-md mt-1 p-1"
              >
                {nameErr}
              </span>

              <span
                style={{ display: displayNameCheck }}
                className="text-green-600 text-sm text-center w-full rounded-md my-1 p-1"
              >
                {nameCheck}
              </span>

              <div className="flex flex-row justify-center items-center ">
                <button
                  onClick={updateNamefalse}
                  className="w-full border-2 font-bold rounded-xl p-4 flex justify-center items-center bg-red-400 hover:bg-red-500"
                >
                  <i className="fa-solid fa-x text-lg fa-fw"></i>
                </button>

                <button
                  onClick={updateNameTrue}
                  className="w-full border-2 font-bold rounded-xl p-4 flex justify-center items-center bg-green-400 hover:bg-green-500"
                >
                  <i className="fa-solid fa-check text-lg fa-fw"></i>
                </button>
              </div>
            </div>

            {/* ============================================================================================================================= */}

            <label htmlFor="email" className="text-xl font-extrabold">
              Your Email
            </label>

            <div className="border-2 text-lg font-bold rounded-xl p-4 bg-[#D9D9D9]/70 flex flex-row justify-between items-center">
              <h1 className="text-[#999898]">{userDetails.email}</h1>

              <i
                onClick={showUpEmail}
                className="cursor-pointer fa-solid fa-pen-to-square text-xl fa-fw font-bold text-[#EE8B48] hover:text-[#EE8B00]"
              ></i>
            </div>

            <div style={{ display: displayEmail }}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                id="email"
                placeholder="Enter Your New Email"
                className="w-full mb-2 border-2 text-lg font-bold rounded-xl p-4"
              />

              <span
                style={{ display: displayEmErr }}
                className="text-red-600 text-sm text-center w-full rounded-md mt-1 p-1"
              >
                {emailErr}
              </span>

              <span
                style={{ display: displayEmailCheck }}
                className="text-green-600 text-sm text-center w-full rounded-md my-1 p-1"
              >
                {emailCheck}
              </span>

              <div className="flex flex-row justify-center items-center ">
                <button
                  onClick={updateEmailfalse}
                  className="w-full border-2 font-bold rounded-xl p-4 flex justify-center items-center bg-red-400 hover:bg-red-500"
                >
                  <i className="fa-solid fa-x text-lg fa-fw"></i>
                </button>

                <button
                  onClick={updateEmailTrue}
                  className="w-full border-2 font-bold rounded-xl p-4 flex justify-center items-center bg-green-400 hover:bg-green-500"
                >
                  <i className="fa-solid fa-check text-lg fa-fw"></i>
                </button>
              </div>
            </div>

            {/* ============================================================================================================================= */}

            <label htmlFor="password" className="text-xl font-extrabold">
              Your Password
            </label>

            <div className="border-2 text-lg font-bold rounded-xl p-4 bg-[#D9D9D9]/70 flex flex-row justify-between items-center">
              <h1 className="text-[#999898]">●●●●●●●● </h1>

              <i
                onClick={showUpPass}
                className="cursor-pointer fa-solid fa-pen-to-square text-xl fa-fw font-bold text-[#EE8B48] hover:text-[#EE8B00]"
              ></i>
            </div>

            <div style={{ display: displayPass }}>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                id="password"
                placeholder="Enter Your New Password"
                className="w-full mb-2 border-2 text-lg font-bold rounded-xl p-4"
              />

              <span
                style={{ display: displayPassErr }}
                className="text-red-600 text-sm text-center w-full rounded-md my-1 p-1"
              >
                {passwordErr}
              </span>

              <span
                style={{ display: displayPassCheck }}
                className="text-green-600 text-sm text-center w-full rounded-md my-1 p-1"
              >
                {passwordCheck}
              </span>

              <div className="flex flex-row justify-center items-center ">
                <button
                  onClick={updatePassfalse}
                  className="w-full border-2 font-bold rounded-xl p-4 flex justify-center items-center bg-red-400 hover:bg-red-500"
                >
                  <i className="fa-solid fa-x text-lg fa-fw"></i>
                </button>

                <button
                  onClick={updatePassTrue}
                  className="w-full border-2 font-bold rounded-xl p-4 flex justify-center items-center bg-green-400 hover:bg-green-500"
                >
                  <i className="fa-solid fa-check text-lg fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1  p justify-center items-center relative">
            {/* <div className="w-72 overflow-hidden"> 
  <div
    className="transform scale-125 origin-top-left" // Adjust scale factor as needed
    dangerouslySetInnerHTML={{
      __html: userDataInfo.generatedModel,
    }}
  />
</div> */}
            <div className="z-20 w-96 overflow-hidden ">
              <div
                className="z-20 overflow-hidden flex justify-center transform scale-150"
                dangerouslySetInnerHTML={{
                  __html: userDataInfo.generatedModel,
                }}
              ></div>
            </div>

            {userDataInfo && Object.keys(userDataInfo).length > 0 ? (
              <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gray-300"></div>
                <div className="flex justify-center w-32">
                  <button
                    onClick={handleDeleteModel}
                    className="btn  hover:text-black border-none text-white font-extrabold rounded-xl mb-10 w-fit mx-auto max-sm:mt-0"
                  >
                    {/* Delete Model{" "} */}
                    <i class="fa-solid fa-trash text-red-400  text-2xl"></i>
                  </button>
                  <button
                    className="btn  hover:text-black border-none text-white font-extrabold rounded-xl mb-10 w-fit mx-auto max-sm:mt-0"
                    onClick={() => {
                      navigate("/user-model", {
                        state: {
                          veinColor: userDataInfo.veinsColor,
                          skinColor: userDataInfo.skinColor,
                          gender: userDataInfo.gender,
                          height: userDataInfo.height,
                          weight: userDataInfo.weight,
                        },
                      });
                    }}
                  >
                    <i class="fa-regular fa-pen-to-square text-[#3d9042] text-2xl"></i>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/generate-model"
                  className=" btn border-none bg-[#EE8B48]  hover:text-black text-xl text-white font-extrabold  rounded-xl  min-h-16 px-14 w-fit mx-auto mt-20 max-sm:mt-0 "
                >
                  Generate Model
                </Link>
                <button
                  onClick={handleDeleteAccount}
                  className=" btn hover:text-black border-none  bg-[#BE0000] text-xl text-white font-extrabold  rounded-xl  min-h-16 px-14 w-fit mx-auto mt-6 max-sm:mt-0"
                >
                  Delete Account
                </button>
              </>
            )}
          </div>
        </div>
        {userDataInfo && Object.keys(userDataInfo).length > 0 ? (
          <>
            <div className="border-[3px] -mt-10 rounded-xl shadow-lg shadow-gray-300 border-gray-400 bg-white p-4 gap-4 flex flex-col">
              <h1 className="text-4xl">Personal Information:</h1>
              <hr />

              <div className="flex flex-row gap-4 items-center">
                {userDataInfo.gender == "Male" ? (
                  <img
                    src={avatar}
                    className="h-12 w-12 rounded-full  "
                    alt="Avatar"
                  />
                ) : (
                  <img
                    src="/images/female.png"
                    className="h-12 w-12 rounded-full  "
                    alt="Avatar"
                  />
                )}
                <div className="flex flex-col gap-2">
                  <p>
                    Gender{" "}
                    <span className="text-gray-400">{userDataInfo.gender}</span>
                  </p>
                  <p>
                    Height{" "}
                    <span className="text-gray-400">
                      {userDataInfo.height} cm
                    </span>
                  </p>
                  <p>
                    Weight{" "}
                    <span className="text-gray-400">
                      {userDataInfo.weight} kg
                    </span>
                  </p>
                </div>
              </div>

              <hr />

              <div className="flex flex-row gap-4">
                <img
                  className="rounded-full h-12 w-12 rotate-45"
                  src={
                    userDataInfo.veinsColor == "warm"
                      ? warm
                      : userDataInfo.veinsColor == "cool"
                      ? cool
                      : neutral
                  }
                />
                <div className="flex flex-col gap-1">
                  <span>Vein Color</span>
                  <span className="text-gray-400">
                    {userDataInfo.veinsColor}
                  </span>
                </div>
              </div>

              <hr />

              <div className="flex flex-row gap-4">
                <span
                  className="rounded-full h-12 w-12"
                  style={{ backgroundColor: userDataInfo.skinColor?.code }}
                ></span>{" "}
                <div className="flex flex-col gap-1">
                  <span>Undertone</span>
                  <span className="text-gray-400">
                    {userDataInfo.skinColor?.name || "N/A"}
                  </span>
                </div>
              </div>

              <hr />

              <div className="flex flex-row gap-4">
                <img
                  src={colorPalette}
                  className="rounded-full h-12 w-12"
                  alt="Color Palette"
                />
                <div className="flex flex-col gap-1">
                  <span>Your Colors</span>
                  <div className="flex flex-row gap-4 flex-wrap mt-2">
                    {userDataInfo.suitableColors.map((e, i) => (
                      <div className="flex justify-center items-center" key={i}>
                        <span
                          className="rounded-full w-8 h-8 border-2"
                          style={{
                            backgroundColor: e,
                          }}
                        ></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleDeleteAccount}
              className=" btn hover:text-black border-none  bg-[#BE0000] text-xl text-white font-extrabold  rounded-xl  min-h-16 px-14 w-fit mx-auto mt-20 max-sm:mt-0"
            >
              Delete Account
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ProfileForm;
