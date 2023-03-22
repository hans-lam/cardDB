import React, { useState } from "react"; 
import { Button, Modal } from "@mantine/core";
import YugiohUpdateForm from "./yugioh-update-form";

const YugiohUpdate = () => {
    const [opened, setOpened] = useState(false); 

    return(
        <div>
            <Button
                size="sm"
                compact 
                variant="outline"
                onClick={() => setOpened(true)}
            >Update a card</Button>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Update a card"
                size="lg"
            >
                <YugiohUpdateForm />
            </Modal>
        </div>
    );
}; 

export default YugiohUpdate;