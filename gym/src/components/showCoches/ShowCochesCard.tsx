// import React from "react";
// import dumbbellImg from "../../assets/dumbbell.png";
// import time from "../../assets/Time.png";
// import calendor from "../../assets/Calendar.png";
import user from "../../assets/user.png";
import { Dumbbell, Calendar, Clock } from "lucide-react";
import "../../index.css";

function ShowCochesCard(props: any) {
  const { selectedTime } = props;

  const displayTime =
    selectedTime === "all" ? props.time.join(", ") : selectedTime;

  const otherTimes =
    selectedTime === "all"
      ? props.time
      : props.time.filter((t: string) => t !== selectedTime);

  return (
    <div className="w-full max-w-3xl p-4 shadow-xl rounded-2xl ">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Left: Profile Info */}
        <div className="flex gap-4 md:gap-5">
          <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full overflow-hidden border">
            <img src={user} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="text-gray-700">
            <p className="font-bold text-base md:text-lg">
              {props.name_of_coach}
            </p>
            <p className="text-sm md:text-base">{props.title}</p>
            <p className="mt-2 text-sm md:text-base">{props.rating}</p>
          </div>
        </div>

        {/* Right: Booking Info */}
        <div className="w-full md:w-auto">
          <fieldset className="border-2 border-green-500 rounded-xl px-3 py-2">
            <legend className="text-sm font-semibold px-2">
              Booking Details
            </legend>

            <div className="pt-1 ">
              <div className="flex items-center gap-2 text-sm mt-2">
                <Dumbbell className="w-5 h-5 text-gray-600" />
                <p>{props.type_of_sport}</p>
              </div>

              <div className="flex items-center gap-2 text-sm mt-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <p>{displayTime}</p>
              </div>

              <div className="flex items-center gap-2 text-sm mt-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <p>{props.date}</p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Description */}
      <div className="mt-3">
        <p className="text-gray-700 text-sm md:text-[14px]">
          {props.description}
        </p>
      </div>

      {/* Available Times */}
      {/* Show other times if selectedTime is not "all" */}
      {selectedTime !== "all" && otherTimes.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium">Also Available for this date:</p>
          <div className="flex flex-wrap mt-2 gap-2">
            {otherTimes.map((time: string, index: number) => (
              <span
                key={index}
                className="bg-green-100 px-2 py-1 rounded text-sm"
              >
                {time}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="w-full sm:w-1/2 border border-gray-400 py-2 rounded-lg cursor-pointer">
          Coach Profile
        </button>
        <button className="w-full sm:w-1/2 bg-green-200 text-black py-2 rounded-lg cursor-pointer">
          Book Workout
        </button>
      </div>
    </div>
  );
}

export default ShowCochesCard;
