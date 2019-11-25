import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"
import Authentication from "./components/Authentication"
import Main from "./components/Main"
import Login from "./components/Login"
import Register from "./components/Register"

const Root = createStackNavigator({
  Home: { screen: Home },
  Authentication:{screen: Authentication},
  Login: {screen:Login},
  Main: {screen: Main},
  Register: {screen: Register}

},
{
  defaultNavigationOptions:{
    
      //header: null,
      title: "Firebase",
      headerStyle: {
          backgroundColor: "#c67100",
      },
      headerTitleStyle: {
          color: "#000000"
      }
  
  }
}
);

const App = createAppContainer(Root);

export default App;