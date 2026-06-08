"use client"
import Image from "next/image";
import { Card, Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container style={{ margin: "0", padding: "0", minWidth: "100%" }}>
            <Card style={{ backgroundColor: "#ffefc1", marginBottom: "20px", textAlign: "center", width: "100%" }}>
                <Card.Body>
                    🎉 Last day open to public is Saturday 13 June 10AM-1PM. See you again in Jan 2027 🎉
                </Card.Body>
            </Card>
            <h1 style={{ alignSelf: "anchor-center", background: "pink", position: "absolute", textAlign: "center", width: "100%" }}>
                Welcome to Organic Dragonfruit Farm
                <br />
                Leppington
            </h1>
            <Image src="/IMG_9564.png" alt="dragonfruits" width={1000} height={800} style={{ width: "100vw", height: "130vh", objectFit: "cover" }} />
        </Container>
    )
}