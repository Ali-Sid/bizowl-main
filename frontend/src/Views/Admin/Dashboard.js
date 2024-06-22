import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Dashboard = () =>{
    return(
            <Container>
                <NavBar/>
                This is Demo page
                <Footer/>
            </Container>
    )
}
export default Dashboard;