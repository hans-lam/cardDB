import React, { useState } from "react";
import { Button } from "@mantine/core";
import Papa from "papaparse";

const YugiohImportForm = () => {
    const [columns, setColumns] = useState([]); 
    const [values, setValues] = useState([]);

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                setColumns(rowsArray[0]); 
                setValues(valuesArray);
            },
        });
    }; 

    const sendHandler = () => {
        
    }

    return (
        <div>
            <h4>Upload your card csv file:</h4>
            <input
                type="file"
                name="file"
                accept=".csv"
                onChange={changeHandler}
                className="csvInput" />
        </div>
    );
};

export default YugiohImportForm;