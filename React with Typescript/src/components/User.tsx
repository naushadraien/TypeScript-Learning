import React, { useState } from "react";

type userType = {
  sessionId: number;
  user: string;
};

const User = () => {
  const [user, setUser] = useState<string>("");
  const [userValue, setUserValue] = useState<userType | null>(null); //used generics to define the type of state

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    console.log(user);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserValue({
      user,
      sessionId: Math.random(),
    });
    console.log(userValue);
  };

  return (
    <div className="mx-4 py-3 flex justify-center items-center flex-1 flex-col">
      {userValue ? (
        <div>
          <h1 className="font-bold capitalize">{userValue.user}</h1>
          <p className="text-pink-500">Logged In</p>
        </div>
      ) : (
        <>
          <form className="flex flex-col">
            <input
              name="user"
              onChange={handleInput}
              type="text"
              placeholder="username"
              className="my-4 rounded border-2 border-pink-500 placeholder:text-center outline-none "
            />
            <button
              className="bg-pink-500 px-2 py-1 rounded-full mx-4 text-white font-medium"
              onClick={handleClick}
            >
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default User;
