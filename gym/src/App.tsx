// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ShowCochesCard from "./components/showCoches/ShowCochesCard";
import Workout from "./components/workout/Workout";

function App() {
  return (
    <>
      <Workout />
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 px-4">
        <ShowCochesCard />
        <ShowCochesCard />
        <ShowCochesCard />
      </div>
    </>
  );
}

export default App;
