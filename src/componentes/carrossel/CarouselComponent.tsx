import { Button } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import './CarouselComponent.css';

function CarouselComponent () {
    var items = [
        {img: "https://i.imgur.com/7xhZQO7.jpg"},
        {img: "https://i.imgur.com/HaOlOBk.jpg"},
        {img: "https://i.imgur.com/255203B.jpg"},
    ]

    return (
            <div className="rec.rec-arrow, rec-carousel-item">
                <Carousel enableAutoPlay autoPlaySpeed={4000} itemsToShow={1} isRTL={false}
                    pagination={false} >
                    
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