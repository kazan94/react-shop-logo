function Card () {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Добавить в избранное" />
            </div>
            <div className="cardImgContainer">
                <img src="/img/logo/cat-ico.png" alt="Логотип" />
            </div>
            <p className="cardName">Логотип "Кошка"</p>
            <div className="cardPriceAndAdd">
                <div>
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
                </div>
                <button>
                <img src="/img/plus.svg" alt="Добавить в корзину" />
                </button>
            </div>
        </div>
    );
}

export default Card;