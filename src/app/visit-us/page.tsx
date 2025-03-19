"use client"
import Image from "next/image";
import Link from "next/link";
import { Card, Container } from "react-bootstrap";

export default function VisitUs() {
    return (
        <Container style={{ height: "90vh", width: "70vw", marginTop: "30px" }}>
            <h1>Visit Us</h1>

            <Container style={{ padding: "0", marginTop: "20px" }}>
                <h3>Our history</h3>
                <Card>
                    <Card.Body>🚜 Our farm contains 300 dragonfruit trees that have been growing for 10+ years. Every year, we have many returning customers who have enjoyed our white dragonfruits.</Card.Body>
                    <Card.Body>🧑‍🌾 We are a family run farm. Please be respectful and abide by our rules.</Card.Body>
                </Card>
            </Container>
            <Container style={{ padding: "0", marginTop: "30px" }}>
                <h3>Information</h3>
                <Card>
                    <Card.Body>📍 We are located at 115 Dickson Road, Leppington NSW 2179, about 1.5 hr drive from Sydney, and roughly a 20 minute walk from Leppington Train Station</Card.Body>
                    <Card.Body>🕒 We are open 9am - 5pm every day, unless stated otherwise on <Link href="/updates">Harvest Updates</Link> page.</Card.Body>
                    <Card.Body>📅 Dragonfruit season for our farm typically occurs early February to end of April and is open to the public from February to April every year for dragonfruit picking.</Card.Body>

                </Card>
            </Container>
            <Container style={{ padding: "0", marginTop: "30px" }}>
                <h3>Rules & Disclaimer</h3>
                <Card style={{ marginBottom: "30px" }}>
                    <Card.Body>◾ Please follow all rules listed in the image below.</Card.Body>
                    <Card.Body>◾ Please wear something suitable for dragonfruit-picking as the plants have spikes and the ground may be dirty. Be mindful of the environment and please bring your own environment bags and knives/scissors, as there may not be enough for everyone to use.</Card.Body>
                    <Card.Body>◾ Take care of your children and belongings.</Card.Body>
                    <Card.Body>◾ For groups over 20 people, please message 0432198893 with your name, number of people, and your preferred date and time.</Card.Body>
                    <Card.Body>◾ If you are travelling via public transport, remember to bring something suitable to carry/wheel your produce as it may be heavy.</Card.Body>
                </Card>
                <Image src="/IMG_9415.JPG" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />
                <Image src="/IMG_9414.JPG" height={1000} width={1000} style={{ height: "100%", width: "100%" }} alt="dragonfruits" />

            </Container>
        </Container>
    )
}