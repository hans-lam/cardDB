import React from "react"; 
import {Button} from "@mantine/core"; 
import "../../styling/yugioh-styling/yugioh-list.css";

const YugiohExport = () => {
    const yugiohCols = ["cardName", "cardType", "cardSubType", "cardOrigin", "numberOwned", "tcgPlayerLink"];

    const grabData = () => {
        fetch("http://localhost:5000/yugioh") 
            .then((res) => res.json())
            .then((data) => {
                const csvArr = [yugiohCols]; 

                for (let i in data) {
                    const currCard = [];

                    for (let j in yugiohCols) {
                        const currData = data[i][yugiohCols[j]];
                        if (typeof(currData) === "object") {
                            currCard.push('"' + currData.join(",") + '"');
                        } else {
                            currCard.push(currData);
                        }
                    }

                    csvArr.push(currCard);
                }

                let csvContent = "data:text/csv;charset=utf-8," 
                    + csvArr.map(e => e.join(",")).join("\n");
                
                var encodedUri = encodeURI(csvContent);
                var link = document.createElement("a"); 
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "yugioh.csv");
                document.body.appendChild(link); 

                link.click(); 
            });
    }

    return (
        <div className="crud-buttons">
            <Button
                size="sm"
                compact 
                variant="outline"
                onClick={() => grabData()}
            >
                Export Cards
            </Button>
        </div>
    );
}; 

export default YugiohExport; 