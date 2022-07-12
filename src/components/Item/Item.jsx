import React from "react";
import Button from "../UI/Button/Button";
import "./Item.css"

const Item = (props) => {

    
    function setElement() {
        props.chooseElement(props.code)
    }

    function deleteElement(EO) {
        props.deleteElement(props.code)
        EO.stopPropagation();
    }
    
    function editElement(EO) {
        props.editPosition(props.position);
        EO.stopPropagation();
    }
    
    return(
        <tr 
            id={props.position.code}
            className={props.isChosen ? "item chosen" : "item"}
            onClick={setElement}
        >
            <td>
                <img src={props.position.url} alt="нет изображения" className="image" />
            </td>
            <td>
                <h2>{props.position.phoneName}</h2>
                <div>Стоимость от {props.position.price} BYN</div>
                <div>В наличии {"(штук):"} {props.position.store}</div>
                <Button 
                    style={{marginTop: "20px"}}
                    disabled={props.workMode==="new" || props.editingBlocked}
                    onClick={editElement}    
                >Редактировать</Button>
            </td>
            <td>
                <Button
                    disabled={props.workMode==="new" || props.workMode==="edit"}
                    onClick={(EO)=>{deleteElement(EO)}}
                >Удалить</Button>
            </td>
        </tr>
    );
}

export default Item;