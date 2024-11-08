import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";

// child of HomePage
const Banner = () => {
  // for navigation
  const navigate = useNavigate();

  return (
    <div className="flex bg-blue-100 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* LEFT SIDE */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-500">
          <p>Book Appointment</p>
          <p className="mt-4">With Our Trusted Doctors</p>
        </div>
        <button
          className="bg-blue-300 text-sm sm:text-base text-gray-800 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-200"
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
        >
          Create Account
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={assets.appointment_img}
          alt=""
          className="w-full absolute bottom-0 right-0 max-w-md"
        />
      </div>
    </div>
  );
};

export default Banner;
