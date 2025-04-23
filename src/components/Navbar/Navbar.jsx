import './Navbar.css'

function Navbar() {

    return (
        <div className='navbar'>
            <img src="/public/logo.svg" alt="Logo" />
            <div className='ref'>
                <a href="" className='nav-item selected'>Поиск фильмов</a>
                <a href="" className='nav-item' >
                    Мои фильмы
                    <span className='round'>2</span>
                </a>
                <a href="" className='nav-item-login' >Войти</a>
            </div>

        </div>
    )
}

export default Navbar
