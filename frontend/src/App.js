import React from "react"
import './App.css';
//import Banner from "./banner"
import {Box} from "@material-ui/core"
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer";
import Banner from "./component/home/Banner";
import Slide from "./component/home/Slide";
import Home from "./component/home/Home";
function App() {
  return (
    <div className="App">
         
         <Header />
         <Banner />
         <Box style={{width:"83%"}}>
                    <Slide
                    title="Recommeded movies"
                    />
               </Box>
         <Home />
         <Footer />

    </div>
  );
}

export default App;
