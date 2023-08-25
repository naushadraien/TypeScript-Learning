import React,{ useEffect, useRef } from "react";

const UseRefEx = () => {
  const focusinputRef = useRef<HTMLInputElement>(null);
  const usernameinputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    // console.log(focusinputRef.current);
    focusinputRef.current?.focus();
    
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(usernameinputRef.current?.value);
  }

  return (
    <div className="mx-4 py-3 flex justify-center items-center flex-1 flex-col">
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="focus me!"
          className="my-4 rounded border-2 border-pink-500 placeholder:text-center outline-none focus:ring-2 focus:ring-pink-500"
          ref={focusinputRef}
        />
        <input
          name="user"
          type="text"
          placeholder="username"
          className="my-4 rounded border-2 border-pink-500 placeholder:text-center outline-none "
          ref={usernameinputRef}
        />
        <button className="bg-pink-500 px-2 py-1 rounded-full mx-4 text-white font-medium" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UseRefEx;
