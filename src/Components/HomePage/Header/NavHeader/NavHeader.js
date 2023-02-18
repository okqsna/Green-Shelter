import './NavHeader.css';
const links=["Хто ми", "Наша діяльність", "Команда","Контакти"];
const NavHeader=()=>{
    return(
        <section className='NavHeader'>
                {
                    links && links.map((item, index)=>{
                        return(
                            <nav key={index}>
                            <a href={index}>{item}</a>
                           </nav>
                        )
                    })
                }
        </section>
    )
}
export default NavHeader;