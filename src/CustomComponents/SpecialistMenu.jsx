import { specialityData } from "@/assets/assets";
import { Link } from "react-router-dom";

const SpecialistMenu = () => {
  return (
    <div
      id="specialty"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h2 className="text-2xl font-bold bg-blue-100 text-gray-500 px-8 py-3 hover:scale-105 transition-all duration-300 w-max rounded-md">
        Specialists
      </h2>
      <p className="sm:w-1/3 text-center text-xl">
        Discover a curated network of certified and experienced medical
        professionals and secure your appointment with ease
      </p>
      <div className="flex justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            key={index}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={item.image} alt="item" className="w-16 sm:w-24 mb-2" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialistMenu;
