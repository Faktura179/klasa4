import {createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./components/Main"
import Users from "./components/Users"

const Root = createStackNavigator({
  Main: { screen: Main },
  Users: { screen: Users },
});

const App = createAppContainer(Root);

export default App;