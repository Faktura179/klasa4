import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"
import Gallery from "./components/Gallery"


const Root = createStackNavigator({
  Home: { screen: Home },
  Gallery: {screen: Gallery}
});

const App = createAppContainer(Root);

export default App;