import './App.css';
import {createGlobalStyle} from "styled-components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import EditResume from "./pages/EditResume";
import MyPage from "./pages/MyPage";
import EditDesign from "./pages/EditDesign";
import Login from "./pages/Login";
import * as particlesJS from "autoprefixer";
// import EmailLogin from "./pages/EmailLogin";
// import AddMember from "./pages/AddMember";
// import Modal from "./pages/Modal";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

`;





function App() {
  return (
      <>
          <GlobalStyle/>
          <div className="App box-border">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/my-page" element={<MyPage />} />
                  <Route path="/edit/design" element={<EditDesign />} />
                  <Route path="/edit/resume" element={<EditResume />} />
                  <Route path="/login" element={<Login />} />
                  {/*<Route path="/login/email" element={<EmailLogin />} />*/}
                  {/*<Route path="/login/add" element={<AddMember />} />*/}
                  {/*<Route path="/login/find" element={<Modal />} />*/}
              </Routes>
          </div>
      </>
  );
}

export default App;
