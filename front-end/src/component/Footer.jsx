import Logo from "../assets/fitmerm.png";
export default function Footer() {
  return (
    <>
      <footer className="pt-24 pb-10 flex flex-col justify-center items-center bg-[#EEE6E6] border-t-2 border-dashed border-black">
        <div className="w-3/4 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl text-[#1D1B1B] italic">
            Personalized. Stylish. Inspire.
          </h2>
          <p className="text-lg mt-10 mb-5 md:my-10 text-[#1D1B1B] lg:w-[70vw]">
            We bring you tailored color recommendations that celebrate your
            unique beauty. Whether you{"'"}re looking to refresh your wardrobe
            or find the perfect shades for your skin tone, we’re here to help
            you shine!
            <span>
              <hr className="mt-5 mx-20 border-[#1D1B1B]" />
            </span>
          </p>
          <div className="w-full md:w-4/5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full">
                <h5 className="text-[#1D1B1B]">
                  © 2024 FitMe. All Rights Reserved.{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
