import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import CameraScreen from "./components/Camera"
import BigPhoto from "./components/BigPhoto"

const Root = createStackNavigator({
  Home: { screen: Home },
  Gallery: {screen: Gallery},
  CameraScreen: {screen: CameraScreen},
  BigPhoto:{screen:BigPhoto}
});

const App = createAppContainer(Root);

export default App;