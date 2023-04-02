import React, { useState } from "react"; 
import { Button, Modal } from "@mantine/core";
import YugiohUpdateForm from "./yugioh-update-form";
import "../../styling/yugioh-styling/yugioh-list.css";

const YugiohUpdate = () => {
    const [opened, setOpened] = useState(false); 

    return(
        <div className="crud-buttons">
            <Button
                size="sm"
                compact 
                variant="outline"
                onClick={() => setOpened(true)}
            >Update a card</Button>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                size="lg"
                withCloseButton={false}
            >
                <Modal.Header className="modal-header">
                    <Modal.Title
                        className="modal-title"
                    >
                        Update a card
                    </Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <YugiohUpdateForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}; 

export default YugiohUpdate;