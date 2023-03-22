export const monsterSelectData = [
    { value: 'Token', label: 'Token' },
    { value: 'Normal', label: 'Normal' },
    { value: 'Effect', label: 'Effect' },
    { value: 'Union', label: 'Union' },
    { value: 'Spirit', label: 'Spirit' },
    { value: 'Flip', label: 'Flip' },
    { value: 'Gemini', label: 'Gemini' },
    { value: 'Ritual', label: 'Ritual' },
    { value: 'Tuner', label: 'Tuner' },
    { value: 'Fusion', label: 'Fusion' },
    { value: 'Synchro', label: 'Synchro' },
    { value: 'XYZ', label: 'XYZ' },
    { value: 'Pendulum', label: 'Pendulum' },
    { value: 'Link', label: 'Link' }
];

export const spellSelectData = [
    { value: 'Normal', label: 'Normal' },
    { value: 'Continuous', label: 'Continuous' },
    { value: 'Equip', label: 'Equip' },
    { value: 'Quick-Play', label: 'Quick-Play' },
    { value: 'Field', label: 'Field' },
    { value: 'Ritual', label: 'Ritual' }
];

export const trapSelectData = [
    { value: 'Normal', label: 'Normal' },
    { value: 'Continuous', label: 'Continuous' },
    { value: 'Counter', label: 'Counter' }
];

export const errorMsg = "Something went wrong when trying to send the request. Please check that the data you entered was correct.";

export const englishLinkSuffix = "?Language=English";

export const idIdentifier = "_id";

export const getCardID = (data, hasMultiple, cardName, cardOrigin, setMessage, idBool) => {
    let cardID = "";
    let cardBody = {};
    const idArr = [];
    const bodyArr = [];

    for (let card in data) {
        const currName = data[card].cardName.toLowerCase();
        const currOrigin = data[card].cardOrigin.toLowerCase();

        if (currName === cardName.toLowerCase()) {
            if (hasMultiple) {
                if (currOrigin === cardOrigin.toLowerCase()) {
                    bodyArr.push(data[card]);
                    idArr.push(data[card][idIdentifier]);
                }
            } else {
                bodyArr.push(data[card]);
                idArr.push(data[card][idIdentifier]);
            }
        }
    }

    if (idArr.length > 1) {
        setMessage("Multiple cards found. Please specify card origin.");
    } else if (idArr.length < 1) {
        setMessage("Card not found. Please try again.");
    } else {
        cardID = idArr[0];
        cardBody = bodyArr[0];
    }

    if (idBool) {
        return cardBody;
    } else {
        return cardID;
    }
};

export const typeChangeHandler = (value, setCardType, setMonsterBool, setCurrSubArray, setCurrData) => {
    setCardType(value);

    if (value === "Monster") {
        setMonsterBool(true);
        setCurrSubArray([]);
    } else {
        setMonsterBool(false);

        if (value === "Spell") {
            setCurrSubArray(spellSelectData);
        } else {
            setCurrSubArray(trapSelectData);
        }
    }

    setCurrData([]);
};

export const subTypeChangeHandler = (value, isMonster, setCurrData) => {
    if (isMonster) {
        setCurrData(value);
    } else {
        let currArr = [value];
        setCurrData(currArr);
    }
};

export const getSubType = (object, subType, keyString) => {
    if (subType !== undefined) {
        object[keyString] = subType;
    } else {
        object[keyString] = "";
    }
}

export const getDataObj = (cardType, isMonster, currSubData, cardOrigin, currData, cardName, numberOwned, tcgPlayerLink) => {
    const dataObj = {
        cardType: cardType,
        isMonster: isMonster,
        currSubData: currSubData
    };

    getSubType(dataObj, cardOrigin, "cardOrigin");
    getSubType(dataObj, currData, "currData");
    getSubType(dataObj, cardName, "cardName");
    getSubType(dataObj, numberOwned, "numberOwned");
    getSubType(dataObj, tcgPlayerLink, "tcgPlayerLink");
    return dataObj;
};

export const getFuncObj = (
    setCardName, setCardType, setMonsterBool, setCurrSubArray,
    setCurrData, setCardOrigin, setNumberOwned, setTCGLink) => {
    const funcObj = {
        setCardName: setCardName,
        setCardType: setCardType,
        setMonsterBool: setMonsterBool,
        setCurrSubArray: setCurrSubArray,
        setCurrData: setCurrData,
        setCardOrigin: setCardOrigin,
        setNumberOwned: setNumberOwned,
        setTCGLink: setTCGLink
    };

    return funcObj;
};

export const filterTypes = (field, value, record) => {
    let filterPass = false;
    const typeArr = value.split(",");
    for (let type in typeArr) {
        if (String(record[field]).toLowerCase().includes(typeArr[type].toLowerCase())) {
            filterPass = true;
            break;
        }
    }

    if (value === "" || value === "null") {
        filterPass = true;
    }

    return filterPass
} 