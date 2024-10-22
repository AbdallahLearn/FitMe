import { Link } from "react-router-dom"

export default function ResetPassword() {
    return (
        <>
            {/* Begin: Reset Password */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <h1 className="text-[#EE8B48] max-sm:text-7xl text-8xl font-bold mb-10 md:mb-0">Fit Me</h1>
                    </div>

                    <div className="flex min-h-full flex-1 flex-col justify-center w-full md:w-1/2 px-10 md:pr-10 lg:pr-0">
                        <div className="w-full lg:w-2/3 bg-[#1D1B1B] py-12 px-10 rounded-2xl">
                            <div>
                                <Link to="/signin">
                                    <div className="w-fit p-3 border-2 border-white rounded-xl">
                                        <i className="fa-solid fa-chevron-left fa-fw text-white text-xl"></i>
                                    </div>
                                </Link>
                            </div>


                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-10 mb-3 text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white">
                                    Reset Password 
                                </h2>

                                <p className="text-white text-xl text-center">
                                    Please type something you’ll remember
                                </p>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full">
                                <form method="POST" className="space-y-6">
                                    <div>
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg md:text-2xl font-medium leading-6 text-white">
                                                New  Password
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EE8B30] sm:text-sm sm:leading-6"
                                                placeholder="Must Be 8 Characters"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg md:text-2xl font-medium leading-6 text-white">
                                                Confirm New Password
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Repeat Password"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg md:text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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