import React  from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header/>
        <Body />
        <Footer />
    </>
);