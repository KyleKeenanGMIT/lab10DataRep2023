
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';//nav bar import
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // brwoser router import
import Create from './components/create'; //imports from component  
import Read from './components/read';//imports from component 
import Edit from './components/edit';


function App() {//h1 tag added
  return (
    <BrowserRouter>
    
    <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
          </Nav> 
        </Container>
      </Navbar>
      {/* nav bar created with a dark thing surrounded by browser router */}

  

    <Routes>
      <Route path = '/' element={<Content></Content>}></Route>
      <Route path = '/read' element={<Read></Read>}></Route> {/* read comonent added to nav bar, when clicked brings to read.js file*/}
       <Route path = '/create' element={<Create></Create>}></Route>  {/* route paths created, placed in the nav bar when clicked on they bring to the corresponding component. */ }
      <Route path = '/edit/:id' element={<Edit></Edit>}></Route> {/* route path for edit ':' means that part of the url is a parameter*/}
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;// export
