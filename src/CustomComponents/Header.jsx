import { assets } from "@/assets/assets";

// child of HomePage
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-100 rounded-lg px-6 md:px-10 lg:px-20">
      {/* LEFT SIDE WITH TEXTS */}
      <div className="md:w-1/2 flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-500 font-semibold leading-tight md:leading-tight lg:leading-tight">
          Schedule Your Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-gray-500 text-base font-semibold">
          <img src={assets.group_profiles} className="w-28 " />
          <p>
            Explore our extensive network of trusted doctors{" "}
            <br className="hidden sm:block" /> and schedule your appointment
            today.
          </p>
        </div>
        <a
          href="#specialty"
          className="flex items-center gap-2 bg-blue-300 px-8 py-3 rounded-full text-gray-800 m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment <img src={assets.arrow_icon} alt="" className="w-3"/>
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 relative ">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg "
        />
      </div>
    </div>
  );
};

export default Header;
