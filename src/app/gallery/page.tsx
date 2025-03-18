"use client"
import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function Gallery() {
    return (
        <Carousel style={{ height: "90vh", width: "60vw", justifySelf: "center" }}>
            <Carousel.Item>
                <Image src="./IMG_9182.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9184.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9185.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9191.JPG" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9229.JPG" style={{ height: "100%", width: "100%", position: "relative", top: "-350px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9237.PNG" style={{ height: "100%", width: "100%", position: "relative", top: "-300px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9324.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9348.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9364.JPG" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9517.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9561.jpg" style={{ height: "100%", width: "100%", position: "relative", top: "-250px" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9562.jpg" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9564.png" style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
            </Carousel.Item>
        </Carousel>
    )
}