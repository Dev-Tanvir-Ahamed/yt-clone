import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import './_App.scss';
const App = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const handleSideBar = () => {
       (
        setOpenSidebar(value => !value)
       )
    }
    return (
        <>
        <Header handleSideBar={handleSideBar}/>
            <div className="app_container">
                <Sidebar openSidebar={openSidebar} handleSideBar={handleSideBar}/>
            <Container fluid className="app_main">
                <HomeScreen/>
            </Container>
            </div>
            
        </>
    );
};

export default App;