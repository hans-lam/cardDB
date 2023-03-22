import React from "react";
import { Navbar, Button, Collapse } from "@mantine/core";
import "../../styling/navbar.css";
import {
    IconBellRinging,
    IconFingerprint,
    IconReceipt2,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

const data = [
    { link: '/', label: 'Home', icon: IconBellRinging },
    { link: '/yugioh', label: 'Yugioh', icon: IconReceipt2 },
    { link: '/vanguard', label: 'Vanguard', icon: IconFingerprint }
]

const CardNavbar = () => {
    const [opened, {toggle}] = useDisclosure(true); 

    const links = data.map((item) => (
        <a
            href={item.link}
            key={item.label}
            className="nav"
        >
            <item.icon />
            <span>{item.label}</span>
        </a>
    ));

    return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
         <Button onClick={toggle}>Toggle content</Button>
        <Collapse in={opened}>
        <Navbar.Section>
                {links}
            </Navbar.Section>
        </Collapse>
        </Navbar> 
    );
}

export default CardNavbar;