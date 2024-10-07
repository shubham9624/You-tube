/**
 * headers
 * Body
 *  Sidebar
 *  MenuItems
 * MainConatiner
 *  ButtonList
 *  VideoContainer
 *  Video Card
 * 
 */
import Header from "./components/header";
import MainContainers from "./components/mainContainer";
import Body from "./components/body";
import {Provider} from "react-redux"
import "./App.css";
import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WatchPage from "./components/watchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body/>,
    children :[{
        path :"/",
        element:<MainContainers/>
      },
      {
        path :"/watch",
        element:<WatchPage/>
      },
      {

      }

    ]
  }
]);
function App() {
  return (
   <Provider store= {store}>
     <div >
       <Header/>
       <RouterProvider router={appRouter}/>
    </div>
   </Provider>
  );
}

export default App;
