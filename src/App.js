import "./App.css";
import { RouterProvider , BrowserRouter as Router } from "react-router-dom";
import { router } from "./routers-context/BrowserRouter";


//xl:top-[35px]
function App() {
  
  return (
    
    <div className="App mx-auto relative">
      
      <RouterProvider router={router} />
     
     
    </div>
  );
}

export default App;
