import React,{Component} from "react";
import  ReactDOM  from "react-dom";
import CameriaView from './camera';
import GalleryView  from './gallery';
import  NavBar from './nav';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

const VideoStream = React.createRef(null);

function App() {
    return (
    <div>
    <Router>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<CameriaView></CameriaView> }></Route>
            <Route path="/gall"element={<GalleryView ></GalleryView>}></Route>
        </Routes>
        
    </Router>
     </div>
    );

};


export default App;