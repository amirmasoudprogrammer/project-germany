"use client"
import React, {useState} from 'react';

import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import DetailProductItem from "@/Component/client/module/DetailProductItem";
import DescriptionDetailProducts from "@/Component/client/module/DescriptionDetailProducts";
import Discounted from "@/Component/client/template/Discounted";

;
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CommentComponent from "@/Component/client/module/CommentComponent";
import PostComments from "@/Component/client/module/PostComments";
import Footer from "@/Component/client/layout/Footer";


const data = [
    {
        id: 1,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments2.jpg"
    },
    {
        id: 2,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments.jpg"
    },
    {
        id: 3,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments2.jpg"
    },
    {
        id: 4,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments.jpg"
    },
    {
        id: 5,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments2.jpg"
    },
]

function DetailProducts(props) {
    const [showMore, setShowMore] = useState(false);


    const toggleText = () => {
        setShowMore(!showMore);
    };
    const fullText = `Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through.`.repeat(10);

    return (
        <>
            <div className="bg-white">
                <HeaderComponent/>
            </div>
            <DetailProductItem/>
            <DescriptionDetailProducts showMore={showMore} setShowMore={setShowMore} toggleText={toggleText}
                                       fullText={fullText}/>
            <Discounted image="“Similar products”.svg"/>
            <CommentComponent data={data}/>
            <PostComments/>

            <Footer/>
        </>
    );
}

export default DetailProducts;