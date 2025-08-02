import React from 'react';
import Header from "@/Component/client/layout/Header";
import Footer from "@/Component/client/layout/Footer";

function Layouts({children}) {
    return (
        <>
            <Header/>
            <div>{children}</div>

        </>
    );
}

export default Layouts;