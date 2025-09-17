import data from '../data/data.json';
import '../css/CardList.css'
import CardItem from './CardItem';
import work_img from '../images/icon-work.svg';
import play_img from '../images/icon-play.svg';
import study_img from '../images/icon-study.svg'
import exercise_img from '../images/icon-exercise.svg';
import social_img from '../images/icon-social.svg';
import selfcare_img from '../images/icon-self-care.svg';

function CardList({period}){

      const cardConfig = {
            Work: {
                img: work_img,
                className: "bg-work",
            },
            Play: {
                img: play_img,
                className: "bg-play",
            },
            Study: {
                img: study_img,
                className: "bg-study",
            },
            Exercise: {
                img: exercise_img,
                className: "bg-exercise",
            },
            Social: {
                img: social_img,
                className: "bg-social",
            },
            "Self Care": {
                img: selfcare_img,
                className: "bg-selfcare",
            },
        };

    const userData = data.map((item) => {
        return(
            <CardItem
                key={item.title} 
                item={item} 
                period={period} 
                img = {cardConfig[item.title].img}
                colorClass={cardConfig[item.title].className}>
            </CardItem>
        );
    });

    return(
        <div className='card__list'>
            {userData}
        </div>
    );
}

export default CardList;