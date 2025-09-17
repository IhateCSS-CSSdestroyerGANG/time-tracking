import '../css/CardItem.css';
import dots from '../images/icon-ellipsis.svg'

function CardItem({item, period, img, colorClass}){
    return(
        <div className={"card__item " + colorClass}>
            <div className="card__item__header">
                <img className="card__item__header__image" src={img} alt="" />
            </div>
            <div className="card__item__content">
                <div className="card__item__content__header">
                    <p className='card__item__content__header__paragraph'>{item.title}</p>
                    <img className='card__item__content__header__img' src={dots} alt="" />
                </div>
                <div className="card__item__content__main">
                    <p className='card__item__content__main__current'>{item.timeframes[period].current}hrs</p>
                    <p className='card__item__content__main__previous'>Previous - {item.timeframes[period].previous}hrs</p>  
                </div>
            </div>
        </div>
    );
}

export default CardItem;