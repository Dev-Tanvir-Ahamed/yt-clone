import React from 'react';
import {
  MdExitToApp,
  MdHistory,
  // MdLibrabryBooks,
  MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions,
  // MdExitToApp,
  MdThumbUp
} from 'react-icons/md';
import './_Sidebar.scss';
const Sidebar = ({openSidebar, handleSideBar}) => {
  console.log(handleSideBar);
    return (
        <nav className={openSidebar ? 'sidebar open' : 'sidebar'} onClick={() => handleSideBar()}>
            <ul>
              <li>
                <MdHome size={23} className="sidebar_icon"/>
                <span>Home</span>
              </li>
              <li>
                <MdSubscriptions className="sidebar_icon"/>
                <span>Subscription</span>
              </li>
              <li>
                <MdThumbUp size={23} className="sidebar_icon"/>
                <span>Liked Videos</span>
              </li>
              <li>
                <MdHistory size={23} className="sidebar_icon"/>
                <span>History</span>
              </li>
              <li>
                <MdLibraryBooks className="sidebar_icon"/>
                <span>Library</span>
              </li>
              <li>
                <MdSentimentDissatisfied className="sidebar_icon"/>
                <span>I don't Know</span>
              </li>
              <li>
                <MdExitToApp className="sidebar_icon"/>
                <span>Log out</span>
              </li>
            </ul>
        </nav>
    );
};

export default Sidebar;