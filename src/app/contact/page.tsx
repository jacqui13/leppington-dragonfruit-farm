"use client"
import { Accordion, Container } from "react-bootstrap";

export default function Contact() {
    return (
        <Container>
            <h1>Contact</h1>
            <h3>FAQ</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Are there still any dragonfruits for sale/picking?</Accordion.Header>
                    <Accordion.Body>
                        Dragonfruit season is typically between February to April. Any time outside of these months usually means there are no dragonfruits ready. Check our Harvest Updates page for more specific details before contacting us directly if you have any further questions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do I need a booking for dragonfruit picking?</Accordion.Header>
                    <Accordion.Body>
                        No, booking is not required. Walk in visits are welcome.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}