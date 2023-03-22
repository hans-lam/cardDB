import React from "react"; 
import { Input } from "antd";
import { Checkbox } from "@mantine/core";

const YugiohIdForm = ({setCardName, hasMultiple, onSetMultiple, setCardOrigin}) => {
    return (
        <div>
             <Input
                placeholder="Enter card name..."
                onChange={(e) => setCardName(e.target.value)}
            ></Input> 
            <Checkbox
                checked={hasMultiple}
                label="Multiple Versions?"
                onChange={onSetMultiple}
            /> 
            {hasMultiple ? 
                <Input
                placeholder="Enter card origin..."
                onChange={(e) => setCardOrigin(e.target.value)}
            ></Input> : <div></div>
            }
        </div>
    )
};

export default YugiohIdForm;