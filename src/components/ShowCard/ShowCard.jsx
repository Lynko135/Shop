import React from "react";
import "./ShowCard.css"

const ShowCard = ({phone}) => {
    return (
        <div className="showCard">
            <h2>Подробнее о товаре</h2>
            <div className="parentDescription">
                <div className="forFlex">
                    <div>
                        <img src={phone.url} alt="изображения нет" />
                    </div>
                    <div>
                        <h3>{phone.phoneName}</h3>
                        <div className="showPrice">Стоимость от {phone.price} BYN</div>
                    </div>
                </div>
                <div className="showDescription">{phone.description}</div>
            </div>
            
        </div>
    );
};

export default ShowCard;