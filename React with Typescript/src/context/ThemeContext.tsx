import { createContext, useReducer } from "react";

type stateType = {
  theme: string;
  fontSize: number;
};

// type actionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONT_SIZE";
//   payload?: number;
// };


//Discriminator unions
type ColoractionType = {
  type: "CHANGE_THEME";
};

type SizeactionType = {
  type: "CHANGE_FONT_SIZE";
  payload: number;
};

type actionType = ColoractionType | SizeactionType; //here we are using Discriminator unions to make sure that we are using correct type of action in reducer

const INITIAL_STATE = {
  theme: "light",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  //here ThemeContext is written as Context as we did in many apps that Context but here we gave a specific name
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state, //font size will remain same but theme will change as below
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "CHANGE_FONT_SIZE":
      return {
        ...state, //theme will remain same but font size will change as below
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
