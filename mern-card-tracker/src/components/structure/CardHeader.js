import React from "react";
import { Flex, Header, Menu, Center, Button } from "@mantine/core";

const CardHeader = () => {

  return (
    <Header height={60} mb={120}>
        <Flex justify={{ sm: 'center' }}>
            <Center>
                <Button 
                    variant="transparent"
                    color="rgba(0, 0, 0, 1)"
                    component="a"
                    href="/"
                    size="lg"
                >Home</Button>
            </Center>
            <Menu trigger="hover">
            <Center>
            <Menu.Target>
                <Button 
                    variant="transparent"
                    color="rgba(0, 0, 0, 1)"
                    size="lg"
                >Card Pages</Button>
            </Menu.Target> 
            </Center>
            <Menu.Dropdown>
                <Menu.Item
                    component="a"
                    href="/yugioh"
                >
                    Yugioh
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="/vanguard"
                >
                    Vanguard
                </Menu.Item>
            </Menu.Dropdown>
            </Menu>
        </Flex> 
    </Header>
  );
};

export default CardHeader;
