import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <>
            {/* Begin: Sign Up */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row">
                    <div className="w-full md:w-2/5 xl:w-1/2 flex justify-center">
                        <Link to='/home' className="text-[#EE8B48] max-sm:text-7xl text-8xl font-bold text-center mb-10 md:mb-0">Fit Me</Link>
                    </div>

                    <div className="flex min-h-full flex-1 flex-col justify-center md:items-center xl:items-start w-full lg:w-1/2 px-10 md:pr-10 lg:pr-0">
                        <div className="w-full lg:w-2/3 bg-[#1D1B1B] py-12 px-10 rounded-2xl">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-10 text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white">
                                    Sign Up 
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full">
                                <form method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block max-sm:text-lg md:text-2xl font-medium leading-6 text-white">
                                            Email
                                        </label>

                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-blavk shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="example@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg md:text-2xl font-medium leading-6 text-white">
                                                Create A Password
                                            </label>
                                        </div>

                                        <div className="mt-2 relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EE8B30] sm:text-sm sm:leading-6"
                                                placeholder="Must Be 8 Characters"
                                            />

                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                <button type="button"  className="focus:outline-none border-2 px-1 border-[#EE8B48]">
                                                    <i className="fa-solid fa-eye text-lg fa-fw text-[#EE8B48]"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg md:text-2xl font-medium leading-6 text-white">
                                             Confirm Password
                                            </label>
                                        </div>

                                        <div className="mt-2 relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Repeat Password"
                                            />

                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                <button type="button"  className="focus:outline-none border-2 px-1 border-[#EE8B48]">
                                                    <i className="fa-solid fa-eye text-lg fa-fw text-[#EE8B48]"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg md:text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center max-sm:text-xs md:text-sm text-gray-500">
                                    Already have an account?{" "}
                                    <Link to="/signin" className="font-semibold leading-6 text-[#EE8B48] hover:text-[#EE8B30]">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Sign Up */}
        </>
    )
};