import { AppContext } from "@/context/AppContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast

const MyAppointments = () => {

  // context data used to fetch api
  const { backendUrl, token } = useContext(AppContext);

  // when api is fetched appointments is updated and mapped to render all appointment data
  const [appointments, setAppointments] = useState([]);

  // slot date format 
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    const months = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token },
      });
      if (data.success) {
        // update appointments state in reverse
        setAppointments(data.appointments.reverse());
        // also pass appointments to cfunction to check for today
        checkTodayAppointments(data.appointments); // Check for today's appointments
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch appointments");
    }
  };

  // checks for today appointments
  const checkTodayAppointments = (appointments) => {

    // Get today's date in "DD_MM_YYYY" format
    const today = new Date();

    // formats todays date
    const todayFormatted = `${String(today.getDate()).padStart(2, "0")}_${String(
      today.getMonth() + 1
    ).padStart(2, "0")}_${today.getFullYear()}`;

    // Check if there's an appointment today by comparing appointment date form api and todayFormatted date
    const hasTodayAppointment = appointments.some(
      (appointment) => appointment.slotDate === todayFormatted
    );

    if (hasTodayAppointment) {
      toast.info("🔔 You have an appointment today!", {
        autoClose: false,
      });
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <ToastContainer /> {/* ToastContainer for displaying notifications */}
      <p className="pb-3 mt-12 font-semibold text-gray-800 bg-blue-200 w-max px-4 py-2 rounded-md border-b">
        Your Appointments
      </p>
      <div>
        {appointments.length === 0 ? (
          <div className="flex justify-center items-center h-[50vh]">
            <p className="text-white bg-red-700 px-4 py-2 rounded-md w-max text-center">
              No Appointments booked yet
            </p>
          </div>
        ) : (
          appointments.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            >
              <div>
                <img
                  src={item.docData.image}
                  alt=""
                  className="w-32 bg-indigo-50"
                />
              </div>

              <div className="flex-1 text-base text-zinc-600">
                <p className="text-neutral-800 font-semibold text-xl">
                  {item.docData.name}
                </p>
                <p className="text-base text-blue-800 font-semibold">
                  {item.docData.speciality}
                </p>
                <p className="text-zinc-700 font-medium mt-1">Address:</p>
                <p className="text-base text-red-700 font-semibold">
                  {item.docData.address.line1}
                </p>
                <p className="text-base text-red-700 font-semibold">
                  {item.docData.address.line2}
                </p>
                <p className="text-sm mt-1">
                  <span className="text-base text-neutral-700 mr-1">
                    Date & Time:
                  </span>
                  <span className="text-base font-semibold">
                    {slotDateFormat(item.slotDate)} | {item.slotTime}
                  </span>
                </p>
              </div>
              <div className=""></div>
              <div className="flex flex-col justify-end gap-4">
                <button className="text-sm rounded-md text-center cursor-pointer sm:min-w-48 border bg-blue-800 text-white transition-all duration-300 py-2">
                  Pay Online
                </button>
                <button className="text-sm rounded-md text-center cursor-pointer sm:min-w-48 border py-2 bg-red-600 text-white">
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
