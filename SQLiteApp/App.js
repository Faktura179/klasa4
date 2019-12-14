import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"


const Root = createStackNavigator({
  Home: { screen: Home },
},
{
  defaultNavigationOptions:{
    
      //header: null,
      title: "SQLiteApp",
      headerStyle: {
          backgroundColor: "#673ab7",
      },
      headerTitleStyle: {
          color: "#000000"
      }
  
  }
}
);

const App = createAppContainer(Root);

export default App;