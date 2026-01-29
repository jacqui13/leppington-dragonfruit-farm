"use client"
import { Accordion, Card, Container } from "react-bootstrap";

export default function Contact() {
    return (
        <Container style={{ width: "70vw", height: "90vh", marginTop: "30px" }}>
            <h1>Contact</h1>
            <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                    Please check our website for the information you are after before contacting us. For bookings over 30 people, or if required, please <b>message</b> 0432198893 for any further questions.
                </Card.Body>
            </Card>
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
                            In addition to fresh dragonfruits, we sell fresh peanuts, wintermelons, dragonfruit plants, and more seasonal vegetables. Fresh peanuts are only available in March and April.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How much is the entry fee?</Accordion.Header>
                        <Accordion.Body>
                            No entry fee, feel free to walk in!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>How much does it cost to pick dragonfruits?</Accordion.Header>
                        <Accordion.Body>
                            For picking, dragonfruits cost $12 per kg. We also sell already-picked dragonfruits for cheaper, sorted by size.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Is there free parking onsite?</Accordion.Header>
                        <Accordion.Body>
                            Yes, there is plenty of free street parking just outside.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Container>
    )
}