import React, { useState } from "react";
import { Button } from "@mantine/core";
import YugiohIdForm from "./yugioh-id-form";
import * as constants from "./yugioh-constants";
import YugiohCardForm from "./yugioh-card-form";
import "../../styling/yugioh-styling/yugioh-modals.css";

const YugiohUpdateForm = () => {
    const [cardName, setCardName] = useState("");
    const [cardOrigin, setCardOrigin] = useState("");
    const [hasMultiple, setMultiple] = useState(false);
    const [currCardID, setCurrID] = useState("");
    const [idMessage, setIDMessage] = useState("");

    const [cardType, setCardType] = useState("");
    const [message, setMessage] = useState("");
    const [isMonster, setMonsterBool] = useState(false);
    const [currSubData, setCurrSubArray] = useState([]);
    const [currData, setCurrData] = useState([]);
    const [numberOwned, setNumberOwned] = useState(1);
    const [tcgPlayerLink, setTCGLink] = useState("");
    const [whichStep, setStep] = useState("id");

    let dataObj = constants.getDataObj(cardType, isMonster, currSubData, cardOrigin, currData, cardName, numberOwned, tcgPlayerLink);

    let functionObj = constants.getFuncObj(
        setCardName, setCardType, setMonsterBool, setCurrSubArray,
        setCurrData, setCardOrigin, setNumberOwned, setTCGLink);

    const onChangeHandler = () => {
        const updateURL = "http://localhost:5000/yugioh/update/" + currCardID;

        let finalLink = tcgPlayerLink;
        if (!(tcgPlayerLink.includes(constants.englishLinkSuffix))) {
            finalLink += constants.englishLinkSuffix;
        }

        const updateJSON = {
            cardName: cardName,
            cardType: cardType,
            cardSubType: currData,
            cardOrigin: cardOrigin,
            numberOwned: numberOwned,
            tcgPlayerLink: finalLink
        }

        fetch(updateURL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateJSON)
        })
            .then((response) => {
                const responseMsg = constants.handleResponse("updated", cardName, response);
                setMessage(responseMsg);
            });
    }

    const onSetMultiple = () => {
        setMultiple(!(hasMultiple));
    }

    const onFindHandler = () => {
        fetch("http://localhost:5000/yugioh")
            .then((res) => res.json())
            .then((data) => {
                let cardBody = constants.getCardID(data, hasMultiple, cardName, cardOrigin, setIDMessage, true);
                if (Object.keys(cardBody).length !== 0) {
                    setCurrID(cardBody[constants.idIdentifier]);
                    setCardType(cardBody.cardType);
                    if (cardBody.cardType === "Monster") {
                        setMonsterBool(true);
                        setCurrSubArray(constants.monsterSelectData);
                    } else if (cardBody.cardType === "Spell") {
                        setCurrSubArray(constants.spellSelectData);
                    } else {
                        setCurrSubArray(constants.trapSelectData);
                    }
                    setCurrData(cardBody.cardSubType);
                    setCardName(cardBody.cardName);
                    setCardOrigin(cardBody.cardOrigin);
                    setNumberOwned(cardBody.numberOwned);
                    setTCGLink(cardBody.tcgPlayerLink);

                    setIDMessage("Card Found. Please enter the updated info now.");
                    setStep("card");
                }
            });
    };

    const goBackHandler = () => {
        setCardName("");
        setMultiple(false);
        setCardOrigin("");
        setIDMessage("");
        setStep("id");
    }

    return (
        <div>
            {whichStep === "id" ?
                <div>
                    <h3>Get card ID:</h3>
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
                            onClick={onFindHandler}
                        >
                            Find Card
                        </Button>
                        <p>{idMessage}</p>
                    </div>
                </div> :
                <div>
                    <h3>Update card info:</h3>
                    <div className="change-form">
                        <Button
                            size="sm"
                            compact
                            variant="outline"
                            onClick={goBackHandler}
                        >Change card being updated</Button>
                    </div>
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
                        >Update Card</Button>
                        <p>{message}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default YugiohUpdateForm; 