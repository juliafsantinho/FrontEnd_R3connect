import { Button } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import './CarouselComponent.css';

function CarouselComponent () {
    var items = [
        {img: "https://i.imgur.com/0MaUWmS.png"},
        {img: "https://i.imgur.com/wWTKSYU.png"},
        {img: "https://i.imgur.com/f1al4Di.png"},
        {img: "https://i.imgur.com/q7ZwNOZ.png"},
        {img: "https://i.imgur.com/C7wsCg3.png"},
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