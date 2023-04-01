import './HelpPage.css';

const helpList=[
    {
        "name":"Миски",
        "image":require('./img/bowls.png')
    },
    {
        "name":"Нашийники",
        "image":require('./img/collars.png')
    },
    {
        "name":"Корми",
        "image":require('./img/food.png')
    },
    {
        "name":"Препарати для обробки від кліщів",
        "image":require('./img/vitamins.png')
    },
    {
        "name":"Волонтери для догляду за собаками",
        "image":require('./img/volunteer.png')
    },
    {
        "name":"Будки для собак",
        "image":require('./img/houses.png')
    }
];

const HelpPage=()=>{
    return(
        <section className="HelpPage">
            <div className="txt__HelpPage">
                <p className='p__txt__HelpPage'>
                    <span>Окрім</span>
                    донату для будівництва, ми потребуємо:
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