import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Hero from "../components/Hero";
// import Header from "./components/Section";

import Testimonial from "../components/Testimonial";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Section from "../components/Section";

function Pathway() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AboutUs}/>
                <Route path="/Hero" component={Hero}/>
                <Route path="/Section" component={Section}/>
                <Route path="/Footer" component={Footer}/>
                <Route path="/Testimonial" component={Testimonial}/>
            </Switch>
        
        
        </BrowserRouter>
    )
}

export default Pathway;