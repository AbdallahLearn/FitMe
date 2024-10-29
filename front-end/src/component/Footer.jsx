import Logo from "../assets/fitmerm.png";
export default function Footer() {
  return (
    <>
      <footer className=" py-10 flex flex-col justify-center mt-4 items-center border-t border-black  bg-[#EEE6E6]">
        <div className="w-3/4 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl text-[#1D1B1B] italic">
            Personalized. Stylish. Inspire.
          </h2>
          <p className="text-lg mt-10 mb-5 md:my-10 text-[#1D1B1B] lg:w-[70vw] max-sm:text-sm">
            We bring you tailored color recommendations that celebrate your
            unique beauty. Whether you{"'"}re looking to refresh your wardrobe
            or find the perfect shades for your skin tone, we’re here to help
            you shine!
            <span>
              <hr className="mt-5 mx-20 border-[#1D1B1B]" />
            </span>
          </p>
          <div className="w-full md:w-4/5">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center">
              <div className="w-full md:w-2/3">
                <h5 className="text-[#1D1B1B]">
                  © 2024 FitMe. All Rights Reserved.{" "}
                </h5>
              </div>

              <div className="w-full md:w-1/3 mt-2 md:mt-0">
                <i className="fa-solid fa-envelope fa-fw text-[#1D1B1B] text-lg mr-3"></i>

                <i className="fa-brands fa-linkedin fa-fw text-[#1D1B1B] text-lg mr-3"></i>

                <i className="fa-brands fa-x-twitter fa-fw text-[#1D1B1B] text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
