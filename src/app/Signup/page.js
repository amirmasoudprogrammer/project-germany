"use client"
import React, {useState} from 'react';
import SignupPage from "@/Component/client/template/SignupPage";
import SignupEmail from "@/Component/client/template/SignupEmail";

function Page(props) {
    const [item, setItem] = useState(1)
    return (

        item === 1 ? (<SignupEmail setItem={setItem}/>) : (<SignupPage/>)


    );
}

export default Page;