import React, { useState } from "react";
import { Button } from "@mantine/core";
import Papa from "papaparse";
import * as constants from "./yugioh-constants";
import "../../styling/yugioh-styling/yugioh-modals.css";

const YugiohImportForm = () => {
    const [columns, setColumns] = useState([]);
    const [values, setValues] = useState([]);
    const [message, setMessage] = useState("");

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.forEach((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                setColumns(rowsArray[0]);
                setValues(valuesArray);
            },
        });
    };

    const sendHandler = () => {
        if (columns.length > 0 && values.length > 0) {
            for (let row in values) {
                const baseObj = constants.yugiohFormBase;
                const currRow = values[row];

                for (let col in columns) {
                    if (columns[col] === "numberOwned") {
                        baseObj[columns[col]] = Number(currRow[col]);
                    } else if (columns[col] === "cardSubType") {
                        const splitTypes = currRow[col].split(", ");
                        baseObj[columns[col]] = splitTypes;
                    } else {
                        baseObj[columns[col]] = currRow[col];
                    }
                }

                fetch("http://localhost:5000/yugioh/add", {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(baseObj)
                })
                    .then((response) => {
                        const responseMsg = constants.handleResponse("imported", "", response);
                        setMessage(responseMsg);
                    });
            }
        }
    };

    return (
        <div>
            <h4>Upload your card csv file:</h4>
            <input
                type="file"
                name="file"
                accept=".csv"
                onChange={changeHandler}
                className="csvInput" />
            <div className="submit">
                <Button
                    size="sm"
                    compact
                    variant="outline"
                    onClick={sendHandler}
                > Send CSV file </Button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default YugiohImportForm;