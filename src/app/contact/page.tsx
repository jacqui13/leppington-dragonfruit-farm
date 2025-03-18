"use client"
import { Accordion, Container } from "react-bootstrap";

export default function Contact() {
    return (
        <Container>
            <h1 style={{ marginBottom: "30px" }}>Contact</h1>
            <Container style={{ padding: "0" }}>
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
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Do you accept card payments?</Accordion.Header>
                        <Accordion.Body>
                            No card payments at the moment. We currently only accept cash and PayID payments.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What other produce do you sell?</Accordion.Header>
                        <Accordion.Body>
                            In addition to fresh dragonfruits, we sell fresh peanuts, wintermelons, dragonfruit plants, and more seasonal vegetables.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How much is the entry fee?</Accordion.Header>
                        <Accordion.Body>
                            No entry fee, feel free to walk in!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>How much does it cost to pick dragonfruits</Accordion.Header>
                        <Accordion.Body>
                            For picking, dragonfruits cost $9 per kg. We also sell already-picked dragonfruits for $5-9 per kg, sorted by size.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Container>
    )
}