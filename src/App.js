import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/EditUser";
import PopUser from "./components/PopUser";



function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="add" element={<AddUser/>}></Route>
        <Route path="update/:id" element={<UpdateUser/>}></Route>
        <Route path="pop" element={<PopUser/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
