import React, { useState } from "react"; 
import { Button, Modal } from "@mantine/core";
import YugiohDeleteForm from "./yugioh-delete-form";
import "../../styling/yugioh-styling/yugioh-list.css"

const YugiohDelete = () => {
    const [opened, setOpened] = useState(false); 

    return(
        <div className="crud-buttons">
            <Button
                size="sm"
                compact 
                variant="outline"
                onClick={() => setOpened(true)}
            >Delete a card</Button>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Delete a card"
                size="lg"
            >
                <YugiohDeleteForm />
            </Modal>
        </div>
    );
}; 

export default YugiohDelete;