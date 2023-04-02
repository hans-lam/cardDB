import React from "react";
import { Container, Header, Menu, Center } from "@mantine/core";
import { IconChevronDown } from '@tabler/icons-react';

const CardHeader = () => {



  return (
    <Header height={60} mb={120}>
        <Container>
        <Menu trigger="hover">
        <Center>
        <Menu.Target>
            <p>Test</p>
        </Menu.Target> 
        </Center>
        <Menu.Dropdown>
            <Menu.Item>
                <a href="/yugioh">YahYah</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/vanguard">TEst</a>
            </Menu.Item>
        </Menu.Dropdown>
      </Menu>
            <Menu>
                <Center>
                <Menu.Target>
                    <a href="/">Home</a>
                </Menu.Target>
                </Center>
            </Menu>
            </Container> 
    </Header>
  );
};

export default CardHeader;
