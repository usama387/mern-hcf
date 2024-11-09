import { assets } from "@/assets/assets";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Appointment = () => {
  // Get URL parameters when a doctor is clicked on home
  const { docId } = useParams();

  // Access the AppContext, which contains the doctors object
  const { doctors, currencySymbol } = useContext(AppContext);

  // State to hold doctor information
  const [doctorInfo, setDoctorInfo] = useState(null);

  // State to hold doctor slots information
  const [docSlots, setDocSlots] = useState([]);

  // State to hold slot index by default its first slot in array
  const [slotIndex, setSlotIndex] = useState(0);

  // State to hold slot time
  const [slotTime, setSlotTime] = useState("");

  // variable to hold week days
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // fetches doctor from doctors using id from params
  useEffect(() => {
    if (doctors && docId) {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDoctorInfo(docInfo);
    }
  }, [docId, doctors]); // Only run when `docId` or `doctors` change.

  // to get available slots
  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End time set to 9:00 PM

      if (i === 0) {
        currentDate.setHours(Math.max(10, currentDate.getHours() + 1));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0); // Start time set to 10:00 AM
      }

      const timeSlots = [];

      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleTimeString("en-PK", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment by 30 minutes
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [doctorInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            src={doctorInfo?.image}
            className="bg-blue-100 w-full sm:max-w-72 rounded-lg"
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {doctorInfo?.name}
            <img src={assets.verified_icon} className="w-5" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {doctorInfo?.degree} - {doctorInfo?.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {doctorInfo?.experience}
            </button>
          </div>

          {/* About Doctor */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-base text-gray-700 max-w-[700px] mt-1">
              {doctorInfo?.about}
            </p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee:{" "}
            <span className="text-gray-600">
              {doctorInfo?.fees} {currencySymbol}
            </span>
          </p>
        </div>
      </div>

      {/* BOOKING SLOTS */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p className="bg-green-200 text-gray-700 px-8 py-3 w-max rounded-md">Available Slots To Book</p>

        {/* Date and Day select logic */}
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-blue-100 text-gray-500"
                    : "border border-gray-200"
                }`}
                key={index}
                onClick={() => setSlotIndex(index)}
              >
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))}
        </div>

        {/* time select logic */}
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                className={`text-sm flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-blue-100 text-gray-500"
                    : "border border-gray-300 text-gray-400"
                }`}
                onClick={() => setSlotTime(item.time)}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className="bg-blue-200 text-gray-500 text-base px-14 py-3 rounded-full my-6">Schedule Now</button>
      </div>
    </div>
  );
};

export default Appointment;
