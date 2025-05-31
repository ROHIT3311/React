// import React from "react";
// import WorkoutSession from "../workout/types";

// type ShowWorkoutsProps = {
//   sessions: WorkoutSession[];
// };

// const ShowWorkouts: React.FC<ShowWorkoutsProps> = ({ sessions }) => {
//   console.log(sessions);
//   if (sessions.length === 0) {
//     return <p>No workouts found.</p>;
//   }

//   return (
//     <div>
//       <div>
//         <p>Available Workouts</p>
//         <ul>
//           {sessions.map((session) => (
//             <li key={session.id}>
//               {session.type_of_sport.toUpperCase()} - {session.date} -{" "}
//               {session.time.join(", ")} - {session.name_of_coach}
//               {session.description}
//               {session.title}
//               <button>Book</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ShowWorkouts;
import React from "react";
import { CoachProfile } from "../workout/types";
import ShowCochesCard from "../showCoches/ShowCochesCard";

type ShowWorkoutsProps = {
  sessions: CoachProfile[];
  selectedTime: string;
};

const ShowWorkouts: React.FC<ShowWorkoutsProps> = ({ sessions }) => {
  if (sessions.length === 0) {
    return <p className="text-center mt-4">No workouts found.</p>;
  }

  return (
    <div className="mt-6">
      <p className="text-xl font-semibold mb-4 text-center">
        Available Workouts
      </p>

      {/* ✅ Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sessions.map((session, selectedTime) => (
          <ShowCochesCard
            key={session.id}
            name_of_coach={session.name_of_coach}
            title={session.title}
            rating={session.rating}
            type_of_sport={session.type_of_sport}
            description={session.description}
            time={session.time.join(", ")} // convert array to string
            date={session.date}
            selectedTime={selectedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowWorkouts;
