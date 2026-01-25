"use client"
import { Badge, Card, Container } from "react-bootstrap";

export default function Updates() {
    return (
        <Container style={{ height: "90vh", width: "70vw", marginTop: "50px" }}>
            <h1>🌱 Harvest Updates</h1>
            <Card>
                <Card.Body>
                    <p>
                        Our dragonfruit harvest is still growing. Most dragonfruit trees are green/unripe, so very few dragonfruits will be ready for picking.
                    </p>
                    <p>
                        We also have pumpkin, wintermelons and pomelo in our shop, available now. Please <strong>text message</strong> 0432198893 for any further questions.
                    </p>
                    <p>
                        Stay tuned for more updates, and feel free to check back here for the latest availability.
                    </p>

                    <Card className="p-3 bg-light">
                        <p><strong>📅 Current Status:</strong> <Badge bg="danger" style={{ textWrap: 'wrap' }}>Dragonfruits now in stock (some still unripe). More will be available in early February.</Badge></p>
                        <p><strong>🚜 Farm Hours: </strong>9am-5pm Daily</p>
                    </Card>

                    <p className="mt-3">Thank you for your support! 🌸</p>
                </Card.Body>
            </Card>
        </Container>
    )
}