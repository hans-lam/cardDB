import React, { useState } from "react";
import { Button } from "@mantine/core";
import * as constants from "./yugioh-constants";
import YugiohIdForm from "./yugioh-id-form";
import "../../styling/yugioh-styling/yugioh-modals.css";

const YugiohDeleteForm = () => {
    const [cardName, setCardName] = useState("");
    const [cardOrigin, setCardOrigin] = useState("");
    const [hasMultiple, setMultiple] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeHandler = () => {
        fetch("http://localhost:5000/yugioh")
            .then((res) => res.json())
            .then((data) => {
                let cardID = constants.getCardID(data, hasMultiple, cardName, cardOrigin, setMessage, false);

                if (cardID.length > 1) {
                    const deleteURL = "http://localhost:5000/yugioh/" + cardID;
                    const deleteJSON = {
                        id: cardID
                    }
                    fetch(deleteURL, {
                        method: 'DELETE',
                        mode: 'cors',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(deleteJSON)
                    })
                        .then((response) => {
                            const responseMsg = constants.handleResponse("deleted", cardName, response);
                            setMessage(responseMsg);
                        });
                }
            });
    };

    const onSetMultiple = () => {
        setMultiple(!(hasMultiple));
    }

    return (
        <div>
            <YugiohIdForm
                setCardName={setCardName}
                hasMultiple={hasMultiple}
                onSetMultiple={onSetMultiple}
                setCardOrigin={setCardOrigin}
            />
            <div className="submit">
                <Button
                    size="sm"
                    compact
                    variant="outline"
                    onClick={onChangeHandler}
                >Delete card from database</Button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default YugiohDeleteForm;