import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  // destructuring specialty parameter from params passed from home page
  const { specialty } = useParams();

  // accessing doctors with useContext by passing my AppContext
  const { doctors } = useContext(AppContext);

  // filter state updated when applyFilter is triggered
  const [filterDoc, setFilterDoc] = useState([]);

  // it filters when specialty is passed from home page and checks if it matches with doctor.specialty otherwise return all doctors
  const applyFilter = () => {
    if (specialty) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === specialty));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, specialty]);

  const navigate = useNavigate();

  return (
    <div>
      <p className="text-gray-600 bg-blue-100 px-2 py-2 w-max rounded-md font-semibold">
        Available Specialists
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
              specialty === " General physician" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              specialty === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
          >
            General physician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
              specialty === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              specialty === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
          >
            Gynecologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
              specialty === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              specialty === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
          >
            Dermatologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
              specialty === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              specialty === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
          >
            Pediatricians
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
              specialty === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              specialty === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
          >
            Neurologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
              specialty === " Gastroenterologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              specialty === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/")
            }
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Doctors;
