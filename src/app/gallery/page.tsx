"use client"
import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function Gallery() {
    return (
        <Carousel style={{ height: "90vh", width: "60vw", justifySelf: "center" }}>
            <Carousel.Item>
                <Image src="/IMG_9182.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9184.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9185.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9191.JPG" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9229.JPG" height={1000} width={1000} style={{ height: "100%", width: "100%", position: "relative", top: "-450px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9237.PNG" height={1000} width={1000} style={{ height: "100%", width: "100%", position: "relative", top: "-400px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9324.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9348.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9364.JPG" height={1000} width={1000} style={{ height: "100%", width: "100%", position: "relative", top: "-100px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9517.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9561.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%", position: "relative", top: "-250px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9562.jpg" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/IMG_9564.png" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
        </Carousel>
    )
}