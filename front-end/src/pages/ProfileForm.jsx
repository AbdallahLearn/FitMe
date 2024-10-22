import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../App.css";
import man from "../assets/man.png";
import avatar from "../assets/avatar.png";
import colorPalette from "../assets/color-palette.png";
import Swal from "sweetalert2";

function ProfileForm() {
  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your account has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Header profile="true" />
      <div className="flex flex-1 flex-col gap-6 overflow-y-visible bg-[#EEE6E6] px-8 py-16">
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="name" className="text-xl font-extrabold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Abdullah"
              className="border-2 text-lg font-bold rounded-xl p-4 bg-[#D9D9D9]/70"
              disabled
            />

            <label htmlFor="email" className="text-xl font-extrabold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="abdullah@gmail.com"
              className="border-2 text-lg font-bold rounded-xl p-4 bg-[#D9D9D9]/70"
              disabled
            />

            <label htmlFor="password" className="text-xl font-extrabold">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="●●●●●●●●"
              className="border-2 text-lg font-bold rounded-xl p-4 bg-[#D9D9D9]/70"
              disabled
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 justify-center items-center relative">
            <img src={man} className="h-[500px] z-20" alt="Man" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="border-[3px] rounded-xl shadow-lg shadow-gray-300 border-gray-400 bg-white p-4 gap-4 flex flex-col">
          <h1 className="text-4xl">Personal Information:</h1>
          <hr />

          <div className="flex flex-row gap-4">
            <img src={avatar} className="h-12 w-12 rounded-full" alt="Avatar" />
            <div className="flex flex-col gap-1">
              <span>Gender</span>
              <span className="text-gray-400">Male</span>
            </div>
          </div>

          <hr />

          <div className="flex flex-row gap-4">
            <span className="rounded-full h-12 w-12 bg-[#5E887A]"></span>
            <div className="flex flex-col gap-1">
              <span>Vein Color</span>
              <span className="text-gray-400">Green veins</span>
            </div>
          </div>

          <hr />

          <div className="flex flex-row gap-4">
            <span className="rounded-full h-12 w-12 bg-[#F9DEC0]"></span>
            <div className="flex flex-col gap-1">
              <span>Undertone</span>
              <span className="text-gray-400">Warm</span>
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
                {new Array(5).fill(0).map((_, i) => (
                  <div className="flex justify-center items-center" key={i}>
                    <span
                      className="rounded-full w-8 h-8 border-2"
                      style={{
                        backgroundColor: `#${Math.floor(
                          Math.random() * 16777215
                        ).toString(16)}`,
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
          className="bg-[#BE0000] text-white font-extrabold rounded-xl p-4 px-12 w-fit mx-auto"
        >
          Delete Account
        </button>
      </div>
    </>
  );
}

export default ProfileForm;
