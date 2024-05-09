import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">Get Started</h1>
          <p className="mb-6">Sign-up by imputing your information below</p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
          <button className="bg-black text-white font-bold py-2 px-4 rounded mb-6">
            NEXT
          </button>
          <p className="mb-4">Login with Others</p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8248 11.8905C21.8302 11.5875 21.8281 11.2842 21.8184 10.9808H12V14.4844H17.7533C17.246 16.2895 15.9282 17.6949 14.0501 18.3711V21.4453H17.9621C20.6142 19.3263 22.2081 15.8317 21.8248 11.8905Z"
                fill="#4285F4"
              />
              <path
                d="M12 24C15.3305 24 18.194 22.7406 20.3083 20.5644L16.3966 17.5041C15.2286 18.3011 13.7632 18.7635 12 18.7635C8.92687 18.7635 6.30292 16.6837 5.3832 13.8235H1.15118V16.9906C3.22704 20.8949 7.31925 24 12 24Z"
                fill="#34A853"
              />
              <path
                d="M5.38322 13.8236C4.91602 12.5787 4.66932 11.2467 4.66935 9.89123C4.66937 8.53571 4.91604 7.20365 5.36915 6.95847V3.81313H1.15115C0.189109 6.00855 -0.151853 8.38294 0.0332081 10.7918C0.218275 13.2007 1.31876 15.4258 3.12164 17.0913L5.38322 13.8236Z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.23679C13.6089 5.22676 15.136 5.89855 16.2892 7.08406L19.4256 4.02798C17.4186 2.19097 14.6847 1.04053 12 1.04053C7.31928 1.04053 3.22706 4.1452 1.15118 8.04913L5.36919 11.2217C6.30296 8.36603 8.92689 6.27628 12 5.23679Z"
                fill="#EA4335"
              />
            </svg>
            Login with google
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/smilingWoman2.png"
            alt="Sign In"
            // className="w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
    </>
  );
};
