"use client"
import { Badge, Card, Container } from "react-bootstrap";

export default function Updates() {
    return (
        <Container style={{ height: "90vh", width: "70vw", marginTop: "50px" }}>
            <h1>🌱 Harvest Updates</h1>
            <Card>
                <Card.Body>
                    {/* <p><strong>Great news, dragonfruit lovers! 🎉</strong></p>
                    <p>
                        Our second round of dragonfruit harvest are available <strong>now.</strong>. It will be available until sold out (estimated to be sold out beginning of May). 🍃✨
                    </p> */}
                    <p>
                        Our dragonfruit harvest is currently out of stock. Most dragonfruit trees are green/unripe, so very few dragonfruits will be ready for picking.
                    </p>
                    <p>
                        We also have pumpkin, wintermelons and pomelo in our shop, available now. Please <strong>text message</strong> 0432198893 for any further questions.
                    </p>
                    <p>
                        Stay tuned for more updates, and feel free to check back here for the latest availability.
                    </p>

                    <Card className="p-3 bg-light">
                        <p><strong>📅 Current Status:</strong> <Badge bg="danger">Dragonfruits out of stock (mostly unripe).</Badge></p>
                        <p><strong>🚜 Farm Hours: </strong>9am-5pm Weekends only</p>
                    </Card>

                    <p className="mt-3">Thank you for your support! 🌸</p>
                </Card.Body>
            </Card>
        </Container>
    )
}