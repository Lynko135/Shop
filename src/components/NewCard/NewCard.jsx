import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import "./NewCard.css"

const NewCard = ({cancel, createElement}) => {

    const [position, setPosition] = useState({code: Date.now()})
    const [cardValid, setCardValid] = useState(false)

    function abort() {
        cancel();
    }

    function create() {
        createElement(position)
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
        setPosition({...position, price: EO.target.value});
        if(EO.target.value && position.phoneName && position.store && position.url && position.description) {
            ableOkButton();
        }
        else{
            setCardValid(false);
        }
    }
    function phoneStoreValidation(EO) {
        validation(EO);
        setPosition({...position, store: EO.target.value});
        if(EO.target.value && position.phoneName && position.price && position.url && position.description)
        {ableOkButton()}
        else{
            setCardValid(false);
        }
    }
    function phoneUrlValidation(EO) {
        validation(EO);
        setPosition({...position, url: EO.target.value});
        if(EO.target.value && position.phoneName && position.price && position.store && position.description)
        {ableOkButton()}
        else{
            setCardValid(false);
        }
    }
    function phoneDescriptionValidation(EO) {
        validation(EO);
        setPosition({...position, description: EO.target.value});
        if(EO.target.value && position.phoneName && position.price && position.store && position.url)
        {ableOkButton()}
        else{
            setCardValid(false);
        }
    }

    return(
        <div className="newCard">
            <h2>Создать новый товар</h2>
            <div className="parentNew">
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">Наименование</div>
                        <input 
                            type="text" 
                            placeholder="Введите наименование товара"
                            onChange={phoneNameValidation}
                        />
                    </div>
                    <div className="comment visible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">Стоимость</div>
                        <input 
                            type="text" 
                            placeholder="Введите стоимость товара"
                            onChange={phonePriceValidation}
                        />
                    </div>
                    <div className="comment visible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">В наличии {"(штук)"}</div>
                        <input 
                            type="text" 
                            placeholder="Введите количество товара на складе"
                            onChange={phoneStoreValidation}
                        />
                    </div>
                    <div className="comment visible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">URL изображения</div>
                        <input 
                            type="text" 
                            placeholder="Добавьте URL изображения товара"
                            onChange={phoneUrlValidation}
                        />
                    </div>
                    <div className="comment visible">Поле не должно быть пустым</div>
                </div>
                <div className="inputGroup">
                    <div className="newForFlex">
                        <div className="label">Характеристики</div>
                        <textarea 
                            name="about" 
                            placeholder="Напишите описание товара"
                            onChange={phoneDescriptionValidation}
                        ></textarea>
                    </div>
                    <div className="comment visible">Поле не должно быть пустым</div> 
                </div>
                <Button
                    disabled={!cardValid}
                    onClick={create}
                >Сохранить</Button>
                <Button
                    onClick={abort}
                >Отмена</Button>
            </div>
            
        </div>
    );
};

export default NewCard