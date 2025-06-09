import { useNavigate } from "react-router-dom";

export default function useGoBack(step = 2) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-step);
  };

  return goBack;
}
