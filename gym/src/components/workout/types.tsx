export interface CoachProfile {
  id: number;
  name_of_coach: string;
  rating: number;
  time: string[];
  date: string; // ✅ Added date
  title: string;
  type_of_sport: string;
  description: string;
}

export default CoachProfile;
