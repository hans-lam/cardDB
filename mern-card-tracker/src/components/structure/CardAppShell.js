import { AppShell, Header } from "@mantine/core";
import React from "react";
import CardNavbar from "./cardNavbar";
import CardHeader from "./CardHeader";
import { Routes, Route } from "react-router-dom";
import HomePage from '../../pages/home';
import YugiohList from '../../pages/yugioh-list';
import VanguardList from '../../pages/vanguard-list';

const CardAppShell = () => {
  return (
    <AppShell
      padding="md"
      navbar={<></>}
      header={<Header height={60} p="xs">{<CardHeader />}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/yugioh' element={<YugiohList />} />
        <Route path='/vanguard' element={<VanguardList />} />
      </Routes>
    </AppShell>
  )
};

export default CardAppShell;