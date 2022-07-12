import React, { createElement } from "react";
import ShowCard from "../ShowCard/ShowCard";
import NewCard from "../NewCard/NewCard"
import "./Card.css"
import EditCard from "../EditCard/EditCard";

const Card = ({workMode, phone, cancel, valid, createElement, setBlock, setEditingBlocked, saveChanges}) => {
    return (
        <div className="card">
            {workMode==="show" &&
                <ShowCard
                    phone={phone}
                />
            }
            {workMode==="new" &&
                <NewCard
                    cancel={cancel}
                    valid={valid}
                    createElement={createElement}
                />
            }
            {workMode==="edit" &&
                <EditCard
                    cancel={cancel}
                    valid={valid}
                    phoneObj={phone}
                    setBlock={setBlock}
                    setEditingBlocked={setEditingBlocked}
                    saveChanges={saveChanges}
                    key={phone.code}
                />
            }

            
        </div>
    );
}

export default Card