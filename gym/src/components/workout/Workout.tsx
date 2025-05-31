import React, { useState } from "react";
import { CoachProfile } from "./types";
import coachProfiles from "./workoutData";
import ShowWorkouts from "../showWorkouts/ShowWorkout";

export default function Workout() {
  const [filters, setFilters] = useState({
    type_of_sport: "all",
    date: "",
    time: "all",
    name_of_coach: "all",
  });

  const [filteredResults, setFilteredResults] = useState<CoachProfile[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const results = coachProfiles.filter(
      (session) =>
        (filters.type_of_sport === "all" ||
          session.type_of_sport === filters.type_of_sport) &&
        (!filters.date || session.date === filters.date) &&
        (filters.time === "all" || session.time.includes(filters.time)) &&
        (filters.name_of_coach === "all" ||
          session.name_of_coach === filters.name_of_coach)
    );

    setFilteredResults(results);
    setShowResults(true);
  };

  return (
    <div>
      <h1>Workout</h1>
      <form onSubmit={handleSubmit}>
        <select
          name="type_of_sport"
          value={filters.type_of_sport}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="yoga">Yoga</option>
          <option value="cardio">Cardio</option>
        </select>

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
        />

        <select name="time" value={filters.time} onChange={handleChange}>
          <option value="all">All</option>
          <option value="9.00">9.00AM</option>
          <option value="10.00">10.00AM</option>
          <option value="11.00">11.00AM</option>
          <option value="12.00">12.00AM</option>
        </select>

        <select
          name="coach"
          value={filters.name_of_coach}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="john">John</option>
          <option value="alex">Alex</option>
          <option value="nancy">Nancy</option>
        </select>

        <button type="submit">Search of Workouts</button>
      </form>
      {showResults && (
        <ShowWorkouts sessions={filteredResults} selectedTime={filters.time} />
      )}
    </div>
  );
}
