import React from "react";
import YugiohDisplay from "../components/yugioh-components/yugioh-display";
import YugiohAdd from "../components/yugioh-components/yugioh-add";
import YugiohDelete from "../components/yugioh-components/yugioh-delete";
import YugiohUpdate from "../components/yugioh-components/yugioh-update";
import "../styling/yugioh-styling/yugioh-list.css";
import YugiohImport from "../components/yugioh-components/yugioh-import";

const YugiohList = () => {

    return (
        <div>
            <YugiohDisplay />
            <div className="crud-buttons-div">
                <YugiohAdd className="crud-buttons"/>
                <YugiohDelete />
                <YugiohUpdate /> 
                <YugiohImport />
            </div>
        </div>
    );
};

export default YugiohList;