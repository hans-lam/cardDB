import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import YugiohAddForm from "./yugioh-add-form";
import "../../styling/yugioh-styling/yugioh-list.css";

const YugiohAdd = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div className="crud-buttons">
            <Button
                size="sm"
                compact
                variant="outline"
                onClick={() => setOpened(true)}
            >Add a card</Button>
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
                        Add a card
                    </Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <YugiohAddForm />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default YugiohAdd;