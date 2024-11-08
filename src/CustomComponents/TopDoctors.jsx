import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// child of HomePage
const TopDoctors = () => {
  // for navigation
  const navigate = useNavigate();

  // accessing doctors from the AppContext by passing it in useContext hook
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 md:mx-10">
      <h2 className="text-2xl font-bold bg-blue-100 text-gray-500 px-8 py-3 hover:scale-105 transition-all duration-300 w-max rounded-md">
        Best Doctors
      </h2>
      <p className="text-center text-muted-foreground sm:w-1/3">
        Doctors with best ranking and expertise, trusted by patients
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 pt-5 gap-y-6 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            onClick={() => navigate(`/appointment/${item._id}`)}
          >
            <img src={item.image} alt="" className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>

              <div className="flex flex-col gap-4 my-2">
                <p className="w-max bg-blue-100 text-gray-500 text-base font-semibold rounded-md px-2 py-1 text-muted-foreground">
                  {item.name}
                </p>
                <p className="w-max px-2 py-1 text-base font-semibold rounded-md bg-green-200 text-black text-muted-foreground">
                  {item.speciality}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="bg-blue-100 text-gray-600 hover:bg-blue-300 px-6"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        More
      </Button>
    </div>
  );
};

export default TopDoctors;
