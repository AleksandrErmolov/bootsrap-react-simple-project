import React from "react";
import {Carousel, CarouselItem } from "react-bootstrap";
import ocean from '../img/ocean.jfif'
import ocean1 from '../img/ocean1.jpg'
import ocean2 from '../img/ocean2.jpg'


export default function Slider() {
    return (

        <>
            <Carousel>
                <CarouselItem style={{'height': '700px'}}>
                    <img
                        className="d-block w-100"
                        src={ocean}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Тестируем библиотеку bootstrap</h3>
                        <p>Помоему - это прикольно</p>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem style={{ 'height': '700px' }}>
                    <img
                        className="d-block w-100"
                        src={ocean1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Слайдер-работает</h3>
                        <p>и это не может не радовать</p>
                    </Carousel.Caption>
                </CarouselItem>



                <CarouselItem style={{ 'height': '700px' }}>
                    <img
                        className="d-block w-100"
                        src={ocean2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Дальше  - будет больше ! </h3>
                        <p>Я врываюсь во Frontend</p>
                    </Carousel.Caption>
                </CarouselItem>


            </Carousel>
        </>
    )
}