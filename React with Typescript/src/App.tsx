import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Child from "./childrenComponent/Child";
import Parent from "./childrenComponent/Parent";
import SecondChild from "./childrenComponent/SecondChild";
import ItemList from "./components/ItemList";
import PostEvents from "./components/PostEvents";
import PostList from "./components/PostList";
import ShapeList from "./components/ShapeList";
import ThemeChanger from "./components/ThemeChanger";
import User from "./components/User";
import UseRefEx from "./components/UseRefEx";
import Navbar from "./components/Navbar";

const App = () => (
  <div className="mx-16">
    {/* <PostList /> */}
    {/* <Parent>
      <Child />
      <SecondChild/>
    </Parent> */}
    {/* <PostEvents/> */}
    {/* <User /> */}
    {/* <ThemeChanger /> */}
    {/* <UseRefEx /> */}
    {/* <ItemList/> */}
    {/* <ShapeList /> */}
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Parent>
              <Child />
              <SecondChild />
            </Parent>
          }
        />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/postevents" element={<PostEvents />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/shapelist" element={<ShapeList />} />
        <Route path="/themechanger" element={<ThemeChanger />} />
        <Route path="/user" element={<User />} />
        <Route path="/userefex" element={<UseRefEx />} />
      </Routes>
    </Router>
  </div>
);

export default App;
