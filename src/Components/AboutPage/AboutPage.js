import './AboutPage.css';
const AboutPage=()=>{
    return(
        <div className="AboutPage">
            <div className='left__AboutPage'>
                <div className="img__left__AboutPage"></div>
            </div>
            <div className='right__AboutPage'>
                <p className='caption__right__AboutPage'><span>Хто</span>такі “Green Shelter”</p>
                <p className='maintxt__right__AboutPage'>
                Громадська організація, що опікується безпритульними собаками, яких евакуювали з зони бойових дій. Наша мета – надати належні умови для евакуйованих притулків та приватних собак, які шукають тимчасовий прихисток. Допомогти з підготовкою вакцин та документів для подальшого виїзду за кордон у приймаючі сім’ї чи притулки інших організацій.
                </p>
            </div>
        </div>
    )
}
export default AboutPage;