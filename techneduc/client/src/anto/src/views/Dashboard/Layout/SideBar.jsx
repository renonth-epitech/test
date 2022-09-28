import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.scss';

const sidebarNavItems = [
    {
        display: 'Mon profil',
        icon: <i className='bx bx-user'></i>,
        to: '/profile',
        section: 'profile'
    },
    {
        display: 'Agenda',
        icon: <i className='bx bx-calendar'></i>,
        to: '/schedule',
        section: 'schedule'
    },
    {
        display: 'Classes',
        icon: <i className='bx bx-group'></i>,
        to: '/classes',
        section: 'classes'
    },
    {
        display: 'Messagerie',
        icon: <i className='bx bx-mail-send'></i>,
        to: '/messages',
        section: 'messages'
    },
    {
        display: 'Mes cours',
        icon: <i className='bx bx-book-content'></i>,
        to: '/lessons',
        section: 'lessons'
    },
    {
        display: 'Réglages',
        icon: <i className='bx bx-cog'></i>,
        to: '/settings',
        section: 'settings'
    },
    {
        display: 'Déconnexion',
        icon: <i className='bx bx-log-out'></i>,
        to: '/',
        section: ''
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
