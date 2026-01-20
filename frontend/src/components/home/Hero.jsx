// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Hero = () => {
//     const { user } = useSelector((state) => state.auth);
//     const [menuOpen, setMenuOpen] = React.useState(false);

//     return (
//         <>
//             <div className="min-h-screen pb-20">
//                 {/* ================= NAVBAR ================= */}
//                 <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
//                     <a href="/">
//                         <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
//                     </a>

//                     {/* Desktop links */}
//                     <div className="hidden md:flex items-center gap-8 text-slate-800">
//                         <a href="#" className="hover:text-green-600">
//                             Home
//                         </a>
//                         <a href="#features" className="hover:text-green-600">
//                             Features
//                         </a>
//                         <a href="#testimonials" className="hover:text-green-600">
//                             Testimonials
//                         </a>
//                         <a href="#cta" className="hover:text-green-600">
//                             Contact
//                         </a>
//                     </div>

//                     {/* Auth Buttons – DESKTOP ONLY */}
//                     <div className="hidden md:flex gap-2">
//                         <Link
//                             to="/app?state=register"
//                             className="px-6 py-2 bg-green-500 hover:bg-green-700 rounded-full text-white transition"
//                             hidden={user}
//                         >
//                             Get started
//                         </Link>

//                         <Link
//                             to="/app?state=login"
//                             className="px-6 py-2 border rounded-full text-slate-700 hover:bg-slate-50 transition"
//                             hidden={user}
//                         >
//                             Login
//                         </Link>

//                         <Link
//                             to="/app"
//                             className="px-6 py-2 bg-green-500 hover:bg-green-700 rounded-full text-white transition"
//                             hidden={!user}
//                         >
//                             Dashboard
//                         </Link>
//                     </div>

//                     {/* Hamburger – MOBILE ONLY */}
//                     <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="26"
//                             height="26"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                         >
//                             <path d="M4 5h16M4 12h16M4 19h16" />
//                         </svg>
//                     </button>
//                 </nav>

//                 {/* ================= MOBILE MENU ================= */}
//                 <div
//                     className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur flex flex-col items-center justify-center gap-6 md:hidden transition-transform duration-300 ${
//                         menuOpen ? "translate-x-0" : "-translate-x-full"
//                     }`}
//                 >
//                     <a onClick={() => setMenuOpen(false)} href="#" className="text-white text-lg">
//                         Home
//                     </a>
//                     <a onClick={() => setMenuOpen(false)} href="#features" className="text-white text-lg">
//                         Features
//                     </a>
//                     <a onClick={() => setMenuOpen(false)} href="#testimonials" className="text-white text-lg">
//                         Testimonials
//                     </a>
//                     <a onClick={() => setMenuOpen(false)} href="#cta" className="text-white text-lg">
//                         Contact
//                     </a>

//                     {/* Mobile Auth Buttons – ONLY HERE */}
//                     <Link
//                         to="/app?state=register"
//                         onClick={() => setMenuOpen(false)}
//                         className="text-white border px-6 py-2 rounded-full"
//                         hidden={user}
//                     >
//                         Get started
//                     </Link>

//                     <Link
//                         to="/app?state=login"
//                         onClick={() => setMenuOpen(false)}
//                         className="text-white border px-6 py-2 rounded-full"
//                         hidden={user}
//                     >
//                         Login
//                     </Link>

//                     <Link
//                         to="/app"
//                         onClick={() => setMenuOpen(false)}
//                         className="bg-green-500 text-white px-6 py-2 rounded-full"
//                         hidden={!user}
//                     >
//                         Dashboard
//                     </Link>

//                     <button
//                         onClick={() => setMenuOpen(false)}
//                         className="mt-4 size-10 flex items-center justify-center bg-indigo-600 text-white rounded-md"
//                     >
//                         X
//                     </button>
//                 </div>

//                 {/* ================= HERO SECTION ================= */}
//                 <div className="flex flex-col items-center text-center px-6 mt-24">
//                     <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl">
//                         Land your dream job with <span className="text-indigo-600">AI-Powered</span> resumes
//                     </h1>

//                     <p className="max-w-md text-base my-6 text-gray-600">
//                         Create, edit and download professional resumes with AI assistance.
//                     </p>

//                     <div className="flex gap-4">
//                         <Link
//                             to="/app?state=register"
//                             className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 flex items-center"
//                         >
//                             Get started →
//                         </Link>

//                         <button className="border rounded-full px-7 h-12 text-slate-700 hover:bg-indigo-50">
//                             Try demo
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Hero;


import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
    const { user } = useSelector((state) => state.auth);
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <div className="min-h-screen pb-10">
                {/* ================= NAVBAR ================= */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <a href="/">
                        <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8 text-slate-800">
                        <a href="#" className="hover:text-green-600">Home</a>
                        <a href="#features" className="hover:text-green-600">Features</a>
                        <a href="#testimonials" className="hover:text-green-600">Testimonials</a>
                        <a href="#cta" className="hover:text-green-600">Contact</a>
                    </div>

                    {/* Auth Buttons – Desktop */}
                    <div className="hidden md:flex gap-2">
                        <Link
                            to="/app?state=register"
                            className="px-6 py-2 bg-green-500 hover:bg-green-700 rounded-full text-white transition"
                            hidden={user}
                        >
                            Get started
                        </Link>

                        <Link
                            to="/app?state=login"
                            className="px-6 py-2 border rounded-full text-slate-700 hover:bg-slate-50 transition"
                            hidden={user}
                        >
                            Login
                        </Link>

                        <Link
                            to="/app"
                            className="px-6 py-2 bg-green-500 hover:bg-green-700 rounded-full text-white transition"
                            hidden={!user}
                        >
                            Dashboard
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden active:scale-90 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur flex flex-col items-center justify-center gap-6 md:hidden transition-transform duration-300 ${
                        menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <a onClick={() => setMenuOpen(false)} href="#" className="text-white text-lg">Home</a>
                    <a onClick={() => setMenuOpen(false)} href="#features" className="text-white text-lg">Features</a>
                    <a onClick={() => setMenuOpen(false)} href="#testimonials" className="text-white text-lg">Testimonials</a>
                    <a onClick={() => setMenuOpen(false)} href="#cta" className="text-white text-lg">Contact</a>

                    <Link
                        to="/app?state=register"
                        onClick={() => setMenuOpen(false)}
                        className="text-white border px-6 py-2 rounded-full"
                        hidden={user}
                    >
                        Get started
                    </Link>

                    <Link
                        to="/app?state=login"
                        onClick={() => setMenuOpen(false)}
                        className="text-white border px-6 py-2 rounded-full"
                        hidden={user}
                    >
                        Login
                    </Link>

                    <Link
                        to="/app"
                        onClick={() => setMenuOpen(false)}
                        className="bg-green-500 text-white px-6 py-2 rounded-full"
                        hidden={!user}
                    >
                        Dashboard
                    </Link>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 size-10 flex items-center justify-center bg-indigo-600 text-white rounded-md"
                    >
                        X
                    </button>
                </div>

                {/* ================= HERO CONTENT ================= */}
                <div className="flex flex-col items-center text-center px-6 pt-20 md:pt-28">
                    <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl">
                        Land your dream job with{" "}
                        <span className="text-indigo-600">AI-Powered</span> resumes
                    </h1>

                    <p className="max-w-md text-base my-6 text-gray-600">
                        Create, edit and download professional resumes with AI assistance.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            to="/app?state=register"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 flex items-center"
                        >
                            Get started →
                        </Link>

                        <button className="border rounded-full px-7 h-12 text-slate-700 hover:bg-indigo-50">
                            Try demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

