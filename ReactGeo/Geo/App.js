import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"
import Locals from "./components/Locals"
import Maps from "./components/Maps"

const Root = createStackNavigator({
  Home: { screen: Home },
  Locals: { screen: Locals },
  Map: {screen: Maps}
});

const App = createAppContainer(Root);

export default App;
