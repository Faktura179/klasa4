import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"
import List from "./components/List"


const Root = createStackNavigator({
  Home: { screen: Home },
  List: { screen: List }
},
{
  defaultNavigationOptions:{
    
      //header: null,
      title: "SQLiteApp",
      headerStyle: {
          backgroundColor: "#673ab7",
          color: "#fff"
      },
      headerTitleStyle: {
          color: "#fff"
      }
  
  }
}
);

const App = createAppContainer(Root);

export default App;