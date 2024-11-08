const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Side */}
        <div>
          <h3 className="font-bold text-2xl text-blue-500 cursor-pointer mb-5 w-40">
            Pulseo
          </h3>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit ament consectetur, adipisicing elit.
            Quibusdam, inventore.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Side */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>usamarazaaq3@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div>
        <hr />
        <p className="py-5 text-center font-semibold">© 2024 Pulseo All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
