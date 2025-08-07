import React from 'react';
import Header from "@/Component/client/layout/Header";
import Footer from "@/Component/client/layout/Footer";
import NeedHelp from "@/Component/client/layout/NeedHelp";

function Layouts({children}) {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
            <NeedHelp/>
        </>
    );
}

export default Layouts;