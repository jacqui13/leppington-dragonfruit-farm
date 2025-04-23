"use client"
import { Badge, Card, Container } from "react-bootstrap";

export default function Updates() {
    return (
        <Container style={{ height: "90vh", width: "70vw", marginTop: "50px" }}>
            <h1>🌱 Harvest Updates</h1>
            <Card>
                <Card.Body>
                    <p><strong>Great news, dragonfruit lovers! 🎉</strong></p>
                    <p>
                        Our second round of dragonfruit harvest are available <strong>now.</strong>. It will be available until sold out (estimated to be sold out beginning of May). 🍃✨
                    </p>
                    <p>
                        We also have fresh peanuts, pumpkin and wintermelons in our shop, available now. <strong>Special - Buy 2kg peanuts and get 3kg wintermelon for free.</strong> Please <strong>text message</strong> 0432198893 for any further questions.
                    </p>
                    <p>
                        Stay tuned for more updates, and feel free to check back here for the latest availability.
                    </p>

                    <Card className="p-3 bg-light">
                        <p><strong>📅 Current Status:</strong> <Badge bg="danger">In Stock</Badge></p>
                        <p><strong>🚜 Farm Hours: </strong>9am-5pm everyday</p>
                    </Card>

                    <p className="mt-3">Thank you for your support! 🌸</p>
                </Card.Body>
            </Card>
        </Container>
    )
}