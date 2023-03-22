import React from "react"; 
import { Input } from "antd";
import { Checkbox } from "@mantine/core";
import "../../styling/yugioh-styling/yugioh-modals.css";

const YugiohIdForm = ({setCardName, hasMultiple, onSetMultiple, setCardOrigin}) => {
    return (
        <div>
            <h4>Enter card name</h4>
             <Input
                placeholder="Enter card name..."
                onChange={(e) => setCardName(e.target.value)}
            ></Input> 
            <Checkbox
                checked={hasMultiple}
                label="Multiple Versions?"
                onChange={onSetMultiple}
                className="checkbox"
            /> 
            {hasMultiple ? 
            <div>
                <h4>Enter card name</h4>
                <Input
                    placeholder="Enter card origin..."
                    onChange={(e) => setCardOrigin(e.target.value)}
                ></Input> 
            </div> : <div></div>
            }
        </div>
    )
};

export default YugiohIdForm;