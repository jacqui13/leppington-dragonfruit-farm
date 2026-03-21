"use client"
import Image from "next/image";
import { Card, Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container style={{ margin: "0", padding: "0", minWidth: "100%" }}>
            <Card style={{ backgroundColor: "#ffefc1", marginBottom: "20px", textAlign: "center", width: "100%" }}>
                <Card.Body>
                    🎉 Special Sale: Dragonfruits for $9/kg for the rest of March! $10/kg in April! Don't miss out! 🎉
                </Card.Body>
            </Card>
            <h1 style={{ justifySelf: "anchor-center", alignSelf: "anchor-center", background: "pink", position: "absolute", textAlign: "center" }}>
                Welcome to Organic Dragonfruit Farm
                <br />
                Leppington
            </h1>
            <Image src="/IMG_9564.png" alt="dragonfruits" width={1000} height={800} style={{ width: "100vw", height: "130vh", objectFit: "cover" }} />
        </Container>
    )
}