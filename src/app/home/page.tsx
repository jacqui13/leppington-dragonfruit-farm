"use client"
import Image from "next/image";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container style={{ margin: "0", padding: "0" }}>
            <h1 style={{ justifySelf: "anchor-center", alignSelf: "anchor-center", background: "pink", position: "absolute" }}>Welcome to Leppington Dragonfruit Farm</h1>
            <Image src="/IMG_9185.jpg" alt="dragonfruits" width={1000} height={800} style={{ width: "100vw", height: "130vh" }} />
        </Container>
    )
}