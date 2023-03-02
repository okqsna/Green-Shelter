import './HelpPage.css';

const helpList=[
    {
        "name":"Миски",
        "image":require('./img/bowls.png')
    },
    {
        "name":"Собача їжа",
        "image":require('./img/food.png')
    },
    {
        "name":"Іграшки",
        "image":require('./img/toys.png')
    },
    {
        "name":"Ошийники",
        "image":require('./img/collars.png')
    },
    {
        "name":"Медикаменти",
        "image":require('./img/meds.png')
    },
    {
        "name":"Вітаміни",
        "image":require('./img/vitamins.png')
    },
    {
        "name":"Будинки для собак",
        "image":require('./img/houses.png')
    }
];

const HelpPage=()=>{
    return(
        <section className="HelpPage">
            <div className="txt__HelpPage">
                <p className='p__txt__HelpPage'>
                    <span>Чим</span>
                    можна допомогти нашому притулку ?
                </p>
            </div>
            <div className='list__HelpPage'>
                {
                    helpList && helpList.map((item, index)=>{
                        return(
                            <div className='item__list__HelpPage' key={index}>
                                <div className='img__item__list__HelpPage'>
                                    <img alt={item.name} src={item.image} width='70px' height="70px"></img>
                                </div>
                                <p className='txt__item__list__HelpPage'>
                                    {item.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default HelpPage;