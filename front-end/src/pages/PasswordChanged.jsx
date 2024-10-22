import { Link } from "react-router-dom"

export default function PasswordChanged() {
    return (
        <>
            {/* Begin: Password Changed */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row">
                    <div className="w-full md:w-2/5 xl:w-1/2 flex justify-center">
                        <Link to='/home'   className="text-[#EE8B48] max-sm:text-7xl text-8xl font-bold text-center mb-10 md:mb-0">Fit Me</Link>
                    </div>

                    <div className="flex min-h-full flex-1 flex-col justify-center md:items-center xl:items-start w-full lg:w-1/2 px-10 md:pr-10 lg:pr-0">
                        <div className="w-full lg:w-2/3 bg-[#1D1B1B] py-12 px-10 rounded-2xl">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-font text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white">
                                    Password Changed
                                </h2>

                                <div className="w-full flex justify-center items-center max-sm:mt-8">
                                    <p className="text-white max-sm:text- text-center w-72">
                                        Your password has been changed succesfully
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full flex flex-col items-center justify-center">
                                <form method="POST" className="space-y-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <button
                                            type="submit"
                                            className="flex w-80 h-12 justify-center items-center rounded-lg bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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