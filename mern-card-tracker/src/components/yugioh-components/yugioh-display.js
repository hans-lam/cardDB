import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { Button } from "@mantine/core";
import * as constants from "./yugioh-constants";
import "../../styling/yugioh-styling/yugioh-display.css";

const YugiohDisplay = () => {
    const [yugiohRows, setYugiohRows] = useState([]);
    const [searchedText, setSearchedText] = useState("");
    const [cardTypeFilter, setCardType] = useState("");
    const [cardSubTypeFilter, setCardSubType] = useState("");
    const [searchedOrigin, setSearchedOrigin] = useState("");

    const duplicatedKeys = ['Normal', 'Ritual', 'Continuous'];

    const SubTypeFilterData = (chosenData, cardType) => {
        const filterArr = [];
        for (let subType in chosenData) {
            let currValue = chosenData[subType].value;
            if (duplicatedKeys.includes(currValue)) {
                currValue = cardType + '.' + currValue;
            }
            const currSubType = {
                text: currValue,
                value: currValue,
            };

            filterArr.push(currSubType);
        }

        return filterArr;
    }

    const yugiohCols = [
        {
            title: 'Card Name',
            dataIndex: 'cardName',
            key: 'cardName',
            filteredValue: [searchedText],
            onFilter: (value, record) => {
                return String(record.cardName).toLowerCase().includes(value.toLowerCase());
            },
            sorter: (a, b) => a.cardName.localeCompare(b.cardName),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Card Type',
            dataIndex: 'cardType',
            key: 'cardType',
            filters: [
                { text: 'Monster', value: 'Monster' },
                { text: 'Spell', value: 'Spell' },
                { text: 'Trap', value: 'Trap' }
            ],
            filteredValue: [cardTypeFilter],
            onFilter: (value, record) => {
                return constants.filterTypes("cardType", value, record);
            },
            sorter: (a, b) => a.cardType.localeCompare(b.cardType),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Card Sub-Type',
            dataIndex: 'cardSubType',
            key: 'cardSubType',
            filters: [
                {
                    text: 'Monster',
                    value: 'Monster',
                    children: SubTypeFilterData(constants.monsterSelectData, "M")
                },
                {
                    text: 'Spell',
                    value: 'Spell',
                    children: SubTypeFilterData(constants.spellSelectData, "S")
                },
                {
                    text: 'Trap',
                    value: 'Trap',
                    children: SubTypeFilterData(constants.trapSelectData, "T")
                },
            ],
            filteredValue: [cardSubTypeFilter],
            onFilter: (value, record) => {
                return constants.filterTypes("cardSubType", value, record);
            },
        },
        {
            title: 'Card Origin',
            dataIndex: 'cardOrigin',
            key: 'cardOrigin',
            filteredValue: [searchedOrigin],
            onFilter: (value, record) => {
                return String(record.cardOrigin).toLowerCase().includes(value.toLowerCase());
            },
        },
        {
            title: 'Number Owned',
            dataIndex: 'numberOwned',
            key: 'numberOwned',
        },
        {
            title: 'TCGPlayer Link',
            dataIndex: 'tcgPlayerLink',
            key: 'tcgPlayerLink'
        }
    ];

    useEffect(() => {
        fetch("http://localhost:5000/yugioh")
            .then((res) => res.json())
            .then((data) => {
                const rowData = setRowStructure(data, yugiohCols);

                setYugiohRows(rowData);
            });
        // eslint-disable-next-line 
    }, []);

    const refreshHandler = () => {
        fetch("http://localhost:5000/yugioh")
            .then((res) => res.json())
            .then((data) => {
                const rowData = setRowStructure(data, yugiohCols);

                setYugiohRows(rowData);
            });
        // eslint-disable-next-line 
    }

    const handleTableChange = (filters) => {
        setCardType(filters.cardType);
        setCardSubType(filters.cardSubType);
    }

    return (
        <div>
            <h2>Yugioh Cards</h2>
            <div className="search-div">
                <Input.Search
                    placeholder="Search card name..."
                    onSearch={(value) => {
                        setSearchedText(value);
                    }}
                    onChange={(e) => {
                        setSearchedText(e.target.value);
                    }} 
                    className="search"
                />
                <Input.Search
                    placeholder="Search card origin..."
                    onSearch={(value) => {
                        setSearchedOrigin(value);
                    }}
                    onChange={(e) => {
                        setSearchedOrigin(e.target.value);
                    }}
                    className="search"
                />
                <Button
                    size="xs"
                    onClick={refreshHandler}
                >
                    Refresh Table
                </Button>
            </div>
            <Table
                columns={yugiohCols}
                dataSource={yugiohRows}
                pagination={{
                    defaultPageSize: 5,
                    showSizeChanger: true,
                    pageSizeOptions: ['5', '10', '20']
                }}
                scroll={{ y: 600 }}
                onChange={handleTableChange}
            ></Table>
        </div>
    );
};

function setRowStructure(data, yugiohCols) {
    const rowData = [];
    for (let card in data) {
        let currCard = {
            key: card
        };
        for (let col in yugiohCols) {
            const currCol = yugiohCols[col].key;
            if (currCol === "cardSubType") {
                currCard[currCol] = data[card][currCol].join(", ");
            } else if (currCol === "tcgPlayerLink") {
                currCard[currCol] = <a
                    href={data[card][currCol]}
                    target="_blank"
                    rel="noreferrer"
                >{data[card][currCol]}</a>
            } else {
                currCard[currCol] = data[card][currCol];
            }
        }
        rowData.push(currCard);
    }

    return rowData;
}

export default YugiohDisplay;