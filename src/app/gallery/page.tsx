"use client"
import { Carousel, Image } from "react-bootstrap";

export default function Gallery() {
    return (
        <Carousel style={{ height: "90vh", width: "60vw", justifySelf: "center" }}>
            <Carousel.Item>
                <Image src="./IMG_9182.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9184.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9185.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9191.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9229.jpg" style={{ height: "100%", width: "100%", position: "relative", top: "-350px" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9237.png" style={{ height: "100%", width: "100%", position: "relative", top: "-300px" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9324.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9348.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9364.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9517.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9561.jpg" style={{ height: "100%", width: "100%", position: "relative", top: "-250px" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9562.jpg" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./IMG_9564.png" style={{ height: "100%", width: "100%" }} />
            </Carousel.Item>
        </Carousel>
    )
}