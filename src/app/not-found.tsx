"use client";

const NotFound = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#eef7e8] px-6">
            <div className="w-full max-w-lg text-center">
                {/* 4 🌱 4 */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 text-[#1f4d2b] font-extrabold leading-none text-[7rem] sm:text-[10rem]">
                    <span>4</span>

                    <span className="relative inline-flex items-center justify-center w-[5.5rem] h-[5.5rem] sm:w-[8rem] sm:h-[8rem] rounded-full bg-[#cfeac2] border-4 border-[#7fc48f]">
                        <svg
                            viewBox="0 0 64 64"
                            className="w-12 h-12 sm:w-[4.5rem] sm:h-[4.5rem]"
                            fill="none"
                            stroke="#2f7d4a"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M32 56V30" />
                            <path d="M32 34C32 22 24 14 12 14c0 12 8 20 20 20Z" fill="#a8dbb0" />
                            <path d="M32 28C32 18 39 10 52 10c0 11-8 18-20 18Z" fill="#c9ecce" />
                        </svg>
                    </span>

                    <span>4</span>
                </div>

                <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-[#1f4d2b]">
                    Page not found
                </h1>

                <p className="mt-3 text-[#4a6b52] text-base sm:text-lg">
                    The page you are looking for does not exist or has been moved.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-[#2f7d4a] px-7 py-3 text-white font-semibold shadow-sm transition-colors hover:bg-[#256a3c] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7fc48f]"
                    >
                        Go to home
                    </a>
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center rounded-full border-2 border-[#7fc48f] bg-white/60 px-7 py-3 text-[#1f4d2b] font-semibold transition-colors hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7fc48f]"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </main>
    );
};

export default NotFound;