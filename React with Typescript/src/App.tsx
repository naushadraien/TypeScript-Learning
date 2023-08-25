import Child from "./childrenComponent/Child";
import Parent from "./childrenComponent/Parent";
import SecondChild from "./childrenComponent/SecondChild";
import PostEvents from "./components/PostEvents";
import PostList from "./components/PostList";
import ThemeChanger from "./components/ThemeChanger";
import User from "./components/User";

const App = () => (
  <div className="mx-16">
    {/* <PostList /> */}
    {/* <Parent>
      <Child />
      <SecondChild/>
    </Parent> */}
    {/* <PostEvents/> */}
    {/* <User /> */}
    <ThemeChanger />
  </div>
);

export default App;
