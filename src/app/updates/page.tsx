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
                        Our second round of dragonfruit harvest will be available <strong>around April 10th</strong>. 🍃✨
                    </p>
                    <p>
                        Stay tuned for more updates, and feel free to check back here for the latest availability.
                    </p>

                    <Card className="p-3 bg-light">
                        <p><strong>📅 Current Status:</strong> <Badge bg="danger">Out of Stock</Badge> (Next harvest: <strong>Approx. April 10th</strong>)</p>
                        <p><strong>🚜 Farm Hours: </strong>9am-5pm everyday</p>
                    </Card>

                    <p className="mt-3">Thank you for your support! 🌸</p>
                </Card.Body>
            </Card>
        </Container>
    )
}