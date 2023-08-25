import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeChanger = () => {
  const { state, dispatch } = useContext(ThemeContext);

  console.log(state);

  return (
    <div className="flex justify-center items-center flex-col">
      <button
        className="bg-pink-500 my-4 text-white px-2 py-1 rounded-full"
        onClick={() => dispatch({ type: "CHANGE_THEME" })}
      >
        Change Theme
      </button>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-full"
        onClick={() => dispatch({ type: "CHANGE_FONT_SIZE", payload: 20 })}
      >
        Change FontSize
      </button>
    </div>
  );
};

export default ThemeChanger;
