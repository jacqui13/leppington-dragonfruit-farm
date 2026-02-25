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
                    <Card.Body>🧑‍🌾 We are a family run farm. Please be respectful and abide by our rules. 🙏 A special thank you to all the visitors who have loved our dragon fruit over the past few years.</Card.Body>
                </Card>
            </Container>
            <Container style={{ padding: "0", marginTop: "30px" }}>
                <h3>Information</h3>
                <Card>
                    <Card.Body>📍 We are located at 115 Dickson Road, Leppington NSW 2179, about 1.5 hr drive from Sydney, and roughly a 20 minute walk from Leppington Train Station</Card.Body>
                    <Card.Body>🕒 We are open 9am - 5pm every day, unless stated otherwise on <Link href="/updates">Harvest Updates</Link> page.</Card.Body>
                    <Card.Body>📅 Dragonfruit season for our farm typically occurs early February to end of April and is open to the public from February to April every year for dragonfruit picking.</Card.Body>
                    <Card.Body>🧑‍🌾 We sell white dragonfruits only (no pink). Pick your own for $9/kg (Cash and PayID accepted). For a limited time, $8/kg is available to groups of over 20.</Card.Body>
                    <Card.Body>🍑A friendly reminder: Entry to our orchard is free, but with the condition that picking and eating the dragon fruit is strictly prohibited (including fruit that has fallen from the tree or fruit that has been picked but has been damaged by insects or cracks and then discarded; our staff will patrol and collect these). Anyone found picking or eating the dragon fruit will be penalised accordingly. Please understand the hard work of the farmers, and thank you for your cooperation. 🙏 A special thank you to all the visitors who have loved our dragon fruit over the past few years. Thank you for your strong support and affirmation of our orchard. We also thank the organizers of the group picking trips. Thank you! 🙏 Wishing everyone a happy new year, good health, and all the best! Have a wonderful outing! Happy dragon fruit picking!</Card.Body>

                </Card>
            </Container>
            <Container style={{ padding: "0", marginTop: "30px" }}>
                <h3>Rules & Disclaimer</h3>
                <Card style={{ marginBottom: "30px" }}>
                    <Card.Body>◾ Please follow all rules listed in the image below.</Card.Body>
                    <Card.Body>◾ Please wear something suitable for dragonfruit-picking as the plants have spikes and the ground may be dirty. Be mindful of the environment and please bring your own environment bags and knives/scissors, as there may not be enough for everyone to use. Please bring your own reusable shopping bag, basket, or box, and gardening gloves (for thorn protection). Small buckets are provided on-site. Tips for picking dragon fruit: Gently twist the fruit with your hand to remove it.</Card.Body>
                    <Card.Body>◾ Friendly Reminder: The farm is muddy, especially on rainy days. We recommend not wearing flip-flops, high heels, or pretty shoes! If it rains, it's best to wear waterproof shoes. On hot days, be sure to take precautions against the sun. Don't forget to bring enough drinking water and take good care of your children. 👧</Card.Body>
                    <Card.Body>◾ Due to significant weather changes this year, the severe weather has resulted in many dragon fruit trees having been burned. 😭 This has also resulted in other crops are also not performing well. Please understand our hard work and sweat 💦! We earnestly request that everyone refrain from damaging any plants on the farm. In previous years, we've seen some children causing trouble, cutting down seedlings and fruit. Parents, please supervise your children carefully! Thank you 🙏</Card.Body>
                    <Card.Body>◾ For groups over 30 people, please message 0432198893 with your name, number of people, and your preferred date and time.</Card.Body>
                    <Card.Body>◾ If you are travelling via public transport, remember to bring something suitable to carry/wheel your produce as it may be heavy.</Card.Body>
                </Card>
                <Image src="/febsale.JPG" height={500} width={500} style={{ height: "50%", width: "50%" }} alt="dragonfruits" />
                <Image src="/image6.JPG" height={500} width={500} style={{ height: "50%", width: "50%" }} alt="dragonfruits" />
                <Image src="/image1.JPG" height={500} width={500} style={{ height: "50%", width: "50%" }} alt="dragonfruits" />
                <Image src="/image2.JPG" height={500} width={500} style={{ height: "50%", width: "50%" }} alt="dragonfruits" />
                <Image src="/IMG_9414.JPG" height={500} width={500} style={{ height: "50%", width: "50%" }} alt="dragonfruits" />

            </Container>
        </Container>
    )
}