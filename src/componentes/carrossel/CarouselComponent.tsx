import { Button } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import './CarouselComponent.css';

function CarouselComponent () {
    var items = [
        {img: "https://i.imgur.com/4795J7M.png"},
        {img: "https://i.imgur.com/kFepxAO.png"},
        {img: "https://i.imgur.com/Z7xKci3.png"},
        {img: "https://i.imgur.com/xW26rFN.png"},
        {img: "https://i.imgur.com/shqoTcx.png"},
    ]

    return (
            <div className="rec.rec-arrow, rec-carousel-item">
                <Carousel enableAutoPlay autoPlaySpeed={5000} itemsToShow={1} isRTL={false}
                    pagination={true} showArrows={false}>
                    
                    {
                        
                        items.map(item => (
                            <>
                                <img src={item.img} alt="Item" className="img-carousel" />
                            </>
                        ))
                        
                    }

                </Carousel>
            </div>
            
    )
}

export default CarouselComponent;