import '../css/CardName.css'
import avatar from '../images/image-jeremy.png'

function CardName({handlePeriodChange}){
    return(
        <div className="card__main">
            <div className="card__name">
                <div className="card__name__header">
                    <img className="card__name__header__img" src={avatar} alt="" />
                </div>
                <div className="card__name__content">
                    <p className="card__name__content__label">Report for</p>
                    <p className="card__name__content__name">Jeremy Robson</p>
                </div>
            </div>
            <div className="card__menu">
                <h5 className='card__menu__item' onClick={()=>handlePeriodChange("daily")} >Daily</h5>
                <h5 className='card__menu__item' onClick={()=>handlePeriodChange("weekly")} >Weekly</h5>
                <h5 className='card__menu__item' onClick={()=>handlePeriodChange("monthly")} >Monthly</h5>
            </div>
        </div>
    );
}

export default CardName;