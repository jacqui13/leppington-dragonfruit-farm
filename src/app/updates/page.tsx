"use client"
import { Badge, Card, Container } from "react-bootstrap";

export default function Updates() {
    return (
        <Container style={{ height: "90vh", width: "70vw", marginTop: "50px" }}>
            <h1>🌱 Harvest Updates</h1>
            <Card>
                <Card.Body>
                    <p>
                        Dragonfruit season is almost over. There are very few dragonfruits left for sale.
                    </p>
                    <p>
                        We also have pumpkin and wintermelons in our shop, available now. Currently, pumpkins are on sale for $1/kg and wintermelon for 70c/kg. If buying over 100kg wintermelon, the price is discouned to 50c/kg. Please <strong>text message</strong> 0432198893 for any further questions.
                    </p>
                    <p>
                        Stay tuned for more updates, and feel free to check back here for the latest availability.
                    </p>

                    <Card className="p-3 bg-light">
                        {/* <p><strong>📅 Current Status:</strong> <Badge bg="danger" style={{ textWrap: 'wrap' }}>Dragonfruits are out of stock (very limited). More will be available in February/March.</Badge></p> */}
                        <p><strong>📅 Current Status:</strong> <Badge bg="success" style={{ textWrap: 'wrap' }}>Dragonfruits almost out of stock.</Badge></p>
                        <p><strong>🚜 Farm Hours: </strong>10am-1pm Sunday only</p>
                    </Card>

                    <p className="mt-3">Thank you for your support! 🌸</p>
                </Card.Body>
            </Card>
        </Container>
    )
}