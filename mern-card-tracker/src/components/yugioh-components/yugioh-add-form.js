import React, { useState } from "react";
import { Button } from "@mantine/core";
import * as constants from "./yugioh-constants";
import YugiohCardForm from "./yugioh-card-form";
import "../../styling/yugioh-styling/yugioh-modals.css";

const YugiohAddForm = () => {
    const [cardName, setCardName] = useState("");
    const [cardType, setCardType] = useState("");
    const [message, setMessage] = useState("");
    const [isMonster, setMonsterBool] = useState(false);
    const [currSubData, setCurrSubArray] = useState([]);
    const [currData, setCurrData] = useState([]);
    const [cardOrigin, setCardOrigin] = useState("");
    const [numberOwned, setNumberOwned] = useState(1);
    const [tcgPlayerLink, setTCGLink] = useState("");

    const dataObj = constants.getDataObj(cardType, isMonster, currSubData);

    const functionObj = constants.getFuncObj(
        setCardName, setCardType, setMonsterBool, setCurrSubArray,
        setCurrData, setCardOrigin, setNumberOwned, setTCGLink);

    const onChangeHandler = () => {
        if (currData.length < 1) {
            setMessage("Please check to make sure you entered all required fields correctly.");
            return;
        }

        let finalLink = tcgPlayerLink;
        if (tcgPlayerLink.length > 0) {
            finalLink += constants.englishLinkSuffix;
        }

        const cardJSON = {
            cardName: cardName,
            cardType: cardType,
            cardSubType: currData,
            cardOrigin: cardOrigin,
            numberOwned: numberOwned,
            tcgPlayerLink: finalLink
        };

        fetch("http://localhost:5000/yugioh/add", {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardJSON)
        })
            .then((response) => {
                const responseMsg = constants.handleResponse("added", cardName, response);
                setMessage(responseMsg);
            });
    };

    return (
        <div>
            <YugiohCardForm
                dataObj={dataObj}
                fObj={functionObj}
            />
            <div className="submit">
                <Button
                    size="sm"
                    compact
                    variant="outline"
                    onClick={onChangeHandler}
                >Add card to database</Button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default YugiohAddForm;