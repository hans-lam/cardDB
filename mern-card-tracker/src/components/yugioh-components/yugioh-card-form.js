import React from "react";
import { Select, MultiSelect } from "@mantine/core";
import { Input } from "antd";
import * as constants from "./yugioh-constants";
import "../../styling/yugioh-styling/yugioh-modals.css";

const YugiohCardForm = ({ dataObj, fObj }) => {

    return (
        <div>
            <h4>Enter card name</h4>
            <Input
                defaultValue={dataObj.cardName}
                placeholder="Enter card name..."
                onChange={(e) => fObj.setCardName(e.target.value)}
            />
            <h4>Choose Card Type</h4>
            <Select
                placeholder="Choose a card type"
                data={[
                    { value: 'Monster', label: 'Monster' },
                    { value: 'Spell', label: 'Spell' },
                    { value: 'Trap', label: 'Trap' },
                ]}
                defaultValue={dataObj.cardType}
                onChange={(value) =>
                    constants.typeChangeHandler(value, fObj.setCardType, fObj.setMonsterBool, fObj.setCurrSubArray, fObj.setCurrData)}
            />
            <h4>Choose Card Sub Type</h4>
            {dataObj.cardType !== "" ?
                <div>
                    {dataObj.isMonster ?
                        <MultiSelect
                            placeholder="Choose all that apply"
                            data={constants.monsterSelectData}
                            searchable
                            nothingFound={'None'}
                            defaultValue={dataObj.currData}
                            onChange={(subType) => constants.subTypeChangeHandler(subType, dataObj.isMonster, fObj.setCurrData)}
                        /> :
                        <Select
                            placeholder="Choose one that applies"
                            clearable
                            data={dataObj.currSubData}
                            defaultValue={dataObj.currData[0]}
                            onChange={(subType) => constants.subTypeChangeHandler(subType, dataObj.isMonster, fObj.setCurrData)}
                        />}
                </div> : <div>
                    <p className="type-message">Select a card type first before choosing sub type.</p>
                </div>
            }
            <h4>Enter card origin</h4>
            <Input
                placeholder={"Enter card origin..."} 
                defaultValue={dataObj.cardOrigin} 
                onChange={(e) => fObj.setCardOrigin(e.target.value)}
            />
            <h4>Enter number owned</h4>
            <Input
                placeholder="Enter number of cards owned..."
                type="number"
                defaultValue={dataObj.numberOwned}
                onChange={(e) => fObj.setNumberOwned(e.target.value)}
            />
            <h4>Enter TCGPlayer link <i>(optional)</i></h4>
            <Input
                placeholder="Enter TCGPlayer link..."
                defaultValue={dataObj.tcgPlayerLink}
                onChange={(e) => fObj.setTCGLink(e.target.value)}
            />
        </div>
    );
};

export default YugiohCardForm;