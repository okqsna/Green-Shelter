import React from "react";
import './GalleryPage.css';
const GalleryPage=()=>{
    const imgs=[
        {
            "id":'dog1',
            "img":require('./img/dog1.png'),
        },
        {
            "id":'dog2',
            "img":require('./img/dog2.webp'),
        },
        {
            "id":'dog3',
            "img":require('./img/dog3.webp')
        },
        {
            "id":'dog4',
            "img":require('./img/dog4.webp'),
        },
        {
            "id":'dog5',
            "img":require('./img/dog5.webp'),
        },
        {
            "id":'dog6',
            "img":require('./img/dog6.webp'),
        },
        {
            "id":'dog7',
            "img":require('./img/dog7.webp'),
        }
    ];
    return(
        <section className="GalleryPage">
            <div className="top__GalleryPage">
                <p className="caption__top__GalleryPage">
                    <span>Г</span>алерея
                </p>
            </div>
            <div className="content__GalleryPage">
                {
                    imgs && imgs.map((item, index)=>{
                        return(
                            <div className="item__content__GalleryPage" id={item.id} key={index}>
                                <img src={item.img} alt="dog"></img>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default GalleryPage;