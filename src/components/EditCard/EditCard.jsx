import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import "../NewCard/NewCard.css"

const EditCard = ({cancel, phoneObj, setBlock, setEditingBlocked, saveChanges}) => {

    const [position, setPosition] = useState(phoneObj)
    const [cardValid, setCardValid] = useState(true)
    function abort() {
        cancel();
    }
    function save() {
        saveChanges(position);
    }
    function validation (EO) {
        EO.target.parentElement.nextElementSibling.className = "comment unVisible"; 
        if(EO.target.value === "") {
            EO.target.parentElement.nextElementSibling.className = "comment visible"
        }
    }
    function ableOkButton() {
        setCardValid(true);
    }
    function phoneNameValidation(EO) {
        validation(EO);
        setBlock(false);
        setEditingBlocked(true);
        setPosition({...position, phoneName: EO.target.value});
        if(EO.target.value && position.price && position.store && position.url && position.description) {
            ableOkButton();
        }
        else{
            setCardValid(false);
        }
        
    }
    function phonePriceValidation(EO) {
        validation(EO);
        setBlock(false);
        setEditingBlocked(true);
        setPosition({...position, price: parseInt(EO.target.value)});
        if(EO.target.value && position.phoneName && position.store && position.url && position.description) {
            ableOkButton();
        }
        else{
            setCardValid(false);
        }
    }
    function phoneStoreValidation(EO) {
        validation(EO);
        setBlock(false);
        setEditingBlocked(true);
        setPosition({...position, store: parseInt(EO.target.value)});
        if(EO.target.value && position.phoneName && position.price && position.url && position.description)
        {ableOkButton()}
        else{
            setCardValid(false);
        }
    }
    function phoneUrlValidation(EO) {
        validation(EO);
        setBlock(false);
        setEditingBlocked(true);
        setPosition({...position, url: EO.target.value});
        if(EO.target.value && position.phoneName && position.price && position.store && position.description)
        {ableOkButton()}
        else{
            setCardValid(false);
        }
    }
    function phoneDescriptionValidation(EO) {
        validation(EO);
        setBlock(false);
        setEditingBlocked(true);
        setPosition({...position, description: EO.target.value});
        if(EO.target.value && position.phoneName && position.price && position.store && position.url)
        {ableOkButton()}
        else{
            setCardValid(false);
        }
    }

    return(
        <div className="newCard">
            <h2>Редактировать товар</h2>
            <div className="parentNew">
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">Наименование</div>
                        <input 
                            type="text" 
                            placeholder="Введите наименование товара"
                            onChange={phoneNameValidation}
                            defaultValue={phoneObj.phoneName}
                        />
                    </div>
                    <div className="comment unVisible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">Стоимость</div>
                        <input 
                            type="text" 
                            placeholder="Введите стоимость товара"
                            onChange={phonePriceValidation}
                            defaultValue={phoneObj.price}
                        />
                    </div>
                    <div className="comment unVisible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">В наличии {"(штук)"}</div>
                        <input 
                            type="text" 
                            placeholder="Введите количество товара на складе"
                            onChange={phoneStoreValidation}
                            defaultValue={phoneObj.store}
                        />
                    </div>
                    <div className="comment unVisible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">URL изображения</div>
                        <input 
                            type="text" 
                            placeholder="Добавьте URL изображения товара"
                            onChange={phoneUrlValidation}
                            defaultValue={phoneObj.url}
                        />
                    </div>
                    <div className="comment unVisible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">Характеристики</div>
                        <textarea 
                            name="about" 
                            placeholder="Напишите описание товара"
                            onChange={phoneDescriptionValidation}
                            defaultValue={phoneObj.description}
                        ></textarea>
                    </div>
                    <div className="comment unVisible">Поле не должно быть пустым</div> 
                </div>
                <Button
                    disabled={!cardValid}
                    onClick={save}
                >Сохранить</Button>
                <Button
                    onClick={abort}
                >Отмена</Button>
            </div>
            
        </div>
    );
};

export default EditCard;