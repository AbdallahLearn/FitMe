import Logo from "../assets/fitmerm.png";

export default function PasswordChanged() {
    return (
        <>
            {/* Begin: Password Changed */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            alt="Your Company"
                            src={Logo}
                            className="w-96"
                        />
                    </div>

                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full md:w-1/2">
                        <div className="w-full md:w-fit bg-[#1D1B1B] py-12 px-20 rounded-2xl">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                    Reset Password 
                                </h2>

                                <p className="text-white">
                                    Your password has been changed succesfully
                                </p>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-[#EE8B48] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Back To Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Password Changed */}
        </>
    )
};