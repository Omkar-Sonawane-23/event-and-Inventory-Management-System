import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row">
          <Image
            src="/Images/Pccoe_Logo.png"
            alt="Login Visual"
            className="object-cover w-12 h-12"
            layout="fixed"
            width={40}
            height={40}
          />
          <div className="text-lg font-semibold ml-2">PCCOE Inventory</div>
        </div>
        <div className="flex items-center">
          <a href="/" className="px-4 hover:underline">
            Home
          </a>
          <a href="/about" className="px-4 hover:underline">
            About
          </a>
          <a href="/contact" className="px-4 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      // Add authentication logic here
      console.log("Email:", email);
      console.log("Username:", username);
      console.log("Phone Number:", phoneNumber);
      console.log("Password:", password);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center flex-grow bg-gray-100">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl h-screen">
          <div className="hidden md:flex md:w-1/2 bg-blue-600">
            <Image
              src="/Images/Pccoe_Image.jpeg"
              alt="Login Visual"
              className="object-cover w-full h-full"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 p-8 h-full">
            <h2 className="text-2xl font-semibold text-center mb-6">
              STUDENT REGISTRATION
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <input
                    id="first_name"
                    type="text"
                    className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="First Name"
                    required
                  />
                  <input
                    id="last_name"
                    type="text"
                    className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Username"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123-456-7890"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <button
                className="flex items-center justify-center w-full text-black py-2 px-4 rounded-md hover:bg-gray-400 hover:text-white transition duration-300 w-[232px] h-[46px]"
              >
                <Image
                  src="/Images/google-icon.jpg"
                  alt="Google Icon"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Sign up with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
