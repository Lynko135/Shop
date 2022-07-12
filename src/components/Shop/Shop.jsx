import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Item from "../Item/Item";
import Button from "../UI/Button/Button";
import cl from "./Shop.module.css"


const Shop = (props) => {
    const [phones, setPhones] = useState(props.phonesArr);
    const [selectedCode, setSelectedCode] = useState(0);
    const [workMode, setWorkMode] = useState("empty"); //"empty", "show", "new", "edit"
    const [unBlocked, setBlock] = useState(true) 
    const [phonePos, setPhonePos] = useState({});
    const [valid, setValid] = useState(true);
    const [editingBlocked, setEditingBlocked] = useState(false)

    

    function setElement(code) {
        if(unBlocked) {
            setSelectedCode(code);
            setWorkMode("show");
            setPhonePos(phones.filter((phone)=>phone.code===code)[0])
        }
    }
    
    function deleteElement(code) {
        if(code === selectedCode) {
            setWorkMode("empty");
            setPhonePos(null);
            setSelectedCode(0);
        }
        setPhones(phones.filter((phone)=>phone.code!==code))
    }

    function createElement(pos) {
        setPhones([...phones, pos]);
        setBlock(true);
        setValid(true);
        setWorkMode("empty");
    }

    function createNewPosition() {
        setWorkMode("new");
        setPhonePos(null);
        setSelectedCode(0);
        setBlock(false);
        setValid(false);
        setEditingBlocked(false);
    }

    function cancel() {
        setWorkMode("empty");
        setValid(true);
        setBlock(true);
        setEditingBlocked(false);
        setSelectedCode(0);
    }

    function editPosition(pos) {
        setWorkMode("edit");
        setPhonePos(pos);
        setSelectedCode(pos.code);
        setValid(true);
    }

    function saveChanges(pos) {
       for(let i=0; i<phones.length; i++) {
        if(phones[i].code === pos.code) {
            phones[i] = pos
        }
       }
        setEditingBlocked(false);
        setSelectedCode(0);
        setBlock(true);
        setValid(true);
        setWorkMode("empty");
        setPhonePos({})       
    }
    
    
    return (
        <div className={cl.parentDiv}>
            
            <div>
                    
                    <table className={cl.shop}>
                    <caption className={cl.capt}>iShop</caption>
                    {phones.length 
                        ? (
                            <thead>
                                <tr>
                                    <th>Товар</th>
                                    <th>Описание</th>
                                    <th></th>
                                </tr>
                            </thead>
                        )
                        : (
                            <thead>
                                <tr>
                                    <th>
                                        <h1>Товаров в каталоге нет</h1>
                                    </th>
                                </tr>
                            </thead>
                        )
                    }
                    <tbody>
                        {phones.length !==0 &&
                            (phones.map(phone => 
                                <Item
                                    isChosen={selectedCode===phone.code}
                                    code={phone.code}
                                    key={phone.code}
                                    position={phone}
                                    chooseElement={setElement}
                                    deleteElement={deleteElement}
                                    editPosition={editPosition}
                                    workMode={workMode}
                                    editingBlocked={editingBlocked}
                                />))
                        }
                        
                    </tbody>
                </table>
            </div>
            <div>
                <Button 
                    style={{width: "500px", margin: "20px"}}
                    onClick={createNewPosition}
                    disabled={workMode==="new" || workMode==="edit"}
                >Создать новый товар</Button>
                {workMode!=="empty" &&
                    <Card
                        workMode={workMode}
                        phone={phonePos}
                        cancel={cancel}
                        valid={valid}
                        createElement={createElement}
                        setBlock={setBlock}
                        setEditingBlocked={setEditingBlocked}
                        saveChanges={saveChanges}
                        
                    />
                }
                
            </div>
        </div>
        
    );
};

export default Shop;