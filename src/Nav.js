import React,{useEffect, useState} from 'react'
import './Nav.css'
function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener('scroll');
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21'
            alt='logo'
            />
            <img className='nav_avatar'
            src='https://cdn.iconscout.com/icon/premium/png-512-thumb/female-avatar-12-774634.png' alt='avatar'/>
        </div>
    )
}

export default Nav
