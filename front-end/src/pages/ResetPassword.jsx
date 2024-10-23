import { Link } from "react-router-dom"

export default function ResetPassword() {
    return (
        <>
            {/* Begin: Reset Password */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row md:gap-20">
                    <div className="flex min-h-full">
                        <div className="w-full h-[80vh] md:w-[30rem] min-md-h-[90vh] bg-[#1D1B1B] px-10 rounded-2xl flex flex-col items-center justify-center gap-5">
                            <div className="flex justify-start items-cente w-full">
                                <Link to="/signin">
                                    <div className="w-fit p-1 border-2 border-white rounded-xl">
                                        <i className="fa-solid fa-chevron-left fa-fw text-white text-xl"></i>
                                    </div>
                                </Link>
                            </div>


                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-font text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white -mt-10">
                                    Reset Password 
                                </h2>
                                
                                <div className="w-full flex justify-center items-center">
                                    <p className="text-white max-sm:text- text-center w-72">
                                        Please type something you’ll remember
                                    </p>
                                </div>
                            </div>

                            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-full flex flex-col items-center justify-center">
                                <form method="POST" className="space-y-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80">
                                                New  Password
                                            </label>
                                        </div>

                                        <div className="mt-2 w-80">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Must Be 8 Characters"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80">
                                                Confirm New Password
                                            </label>
                                        </div>

                                        <div className="mt-2 w-80">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Repeat Password"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <button
                                            type="submit"
                                            className="flex w-80 h-12 justify-center items-center rounded-lg bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Reset Password */}
        </>
    )
};