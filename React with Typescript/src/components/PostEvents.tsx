import React, { useState } from "react";

type userType = {
  sessionId: number;
  search: string;
};

const PostEvents = () => {
  const [search, setSearch] = useState("");
  const [searchValue, setsearchValue] = useState<userType | null>(null); //used generics to define the type of state

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setsearchValue({
      search,
      sessionId: Math.random(),
    });
    console.log(searchValue);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} Deleted`);
  };

  return (
    <div className="mx-4 py-3 flex justify-center items-center flex-1 flex-col">
      {searchValue ? (
        <div>
          <h1 className="font-bold capitalize">{searchValue.search}</h1>
          <p className="text-pink-500">Logged In</p>
        </div>
      ) : (
        <>
          <form>
            <input
              name="search"
              onChange={handleInput}
              type="text"
              placeholder="Search Anything..."
              className="bg-pink-500 rounded-full border-2 border-pink-500 placeholder:text-center placeholder:text-white "
            />
            <button
              className="bg-pink-500 px-2 py-1 rounded-full mx-4 text-white font-medium"
              onClick={handleClick}
            >
              Search
            </button>
          </form>
          <form className="my-3">
            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-pink-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              sit, reiciendis nulla sequi sed deserunt exercitationem nihil
              voluptate autem cum?
            </p>

            <button
              onClick={(e) => handleDelete(e, 1)}
              className="bg-red-500 px-2 py-1 rounded-full text-white"
            >
              Delete
            </button>
          </form>
          <form>
            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
            <p className="text-pink-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              sit, reiciendis nulla sequi sed deserunt exercitationem nihil
              voluptate autem cum?
            </p>

            <button
              onClick={(e) => handleDelete(e, 2)}
              className="bg-red-500 px-2 py-1 rounded-full text-white"
            >
              Delete
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PostEvents;
