import Tooltip from '@material-ui/core/Tooltip';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdApps, MdKeyboardVoice, MdNotifications } from 'react-icons/md';
import './_Header.scss';

const Header = ({handleSideBar}) => {
    // console.log(handleSideBar);
    return (
      
        <div className="header">
            <FaBars className="header__menu" size={26}
            onClick={() => handleSideBar()}
            />
            <Image fluid src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube__logo" title="Youtube Home" className="header__logo"/>
            
           
            <form action="" className="search_form">
                <input placeholder="Search"/>
               <Tooltip title={<h4>Search</h4>}>
               <Button type="submit" className="search__btn">
                    <AiOutlineSearch size={22}/>
                </Button></Tooltip>
              <Tooltip title={<h4>Search with your voice</h4>}>
              <Button className="search__voice"><MdKeyboardVoice size={28}  /></Button>
              </Tooltip>
            </form>
            <div className="header__icons">
               <Tooltip title={<h4>Notifications</h4>}>
                   <Button> <MdNotifications size={28}/></Button>
               </Tooltip>
                <Tooltip title={<h4>Youtube Apps</h4>}>
                    <Button><MdApps size={28}/></Button>
                </Tooltip>
                <Image rounded fluid src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="avatar" className="avatar__logo"/>
            </div>
        </div>
    );
};

export default Header;