"use client"
import { Card, Container } from "react-bootstrap";

export default function VisitUs() {
    return (
        <Container style={{ height: "90vh", width: "60vw", alignContent: "center" }}>
            <h1>Visit Us</h1>
            <Card>
                <Card.Body>📍 We are located at 115 Dickson Road, Leppington NSW 2179.</Card.Body>
                <Card.Body>🕒 We are open 9am - 5pm every day, unless stated otherwise.</Card.Body>
                <Card.Body>📅 Dragonfruit season for our farm typically occurs early February to early March, then again in early April to early May.</Card.Body>
            </Card>
        </Container>
    )
}