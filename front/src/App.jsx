import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Comment from "./pages/Comment";
import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { uidContext } from "./../utils/uidContext";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import NotFound from "./pages/NotFound";
// base API Url
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

function App() {
  const [uid, setUid] = useState();
  const value = { uid, setUid };

  useEffect(() => {
    // Get user Id with jwt Token
    // Do not save it on browser for security
    const fetchUid = async () => {
      axios({
        method: "get",
        url: "jwtuid",
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log(err));
    };

    fetchUid();
  }, [setUid]);

  return (
    <uidContext.Provider value={value}>
      <Box bg="primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </uidContext.Provider>
  );
}

export default App;
