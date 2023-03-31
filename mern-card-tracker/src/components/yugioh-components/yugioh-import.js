import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import YugiohImportForm from "./yugioh-import-form";

const YugiohImport = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div className="crud-buttons">
            <Button
                size="sm"
                compact
                variant="outline"
                onClick={() => setOpened(true)}
            >Import cards</Button>
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
                        Import cards
                    </Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <YugiohImportForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}; 

export default YugiohImport;