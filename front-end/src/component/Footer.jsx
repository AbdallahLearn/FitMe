import Logo from "../assets/fitmerm.png"
 function Footer() {

    return (
        <>
            <footer className="pt-24 pb-10 flex flex-col mt-32 justify-center items-center bg-[#DCD5CB] border-2 border-dashed border-black">
                <div className="w-3/4 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl text-[#3A4F39]">Personalized. Stylish. Inspire.</h2>

                    <p className="text-base mt-10 mb-5 md:my-10 text-[#3A4F39]">
                        We bring you tailored color recommendations that celebrate your unique beauty. 
                        Whether you{"'"}re looking to refresh your wardrobe or find the perfect shades for your skin tone, 
                        we’re here to help you shine!
                        <span>
                            <hr className="mt-5 mx-20 border-[#3A4F39]" />
                        </span>
                    </p>

                    <div className="w-full md:w-4/5">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="w-20">
                                <img src={Logo} alt="Logo" />
                            </div>

                            <div className="w-full">
                                <h5 className="text-[#3A4F39]">© 2024 Fit Me. All Rights Reserved. </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

};

export default Footer