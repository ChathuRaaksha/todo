import React,{ useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BannerImage from '../src/assets/Todowall2.jpg';
import "./styles/Login.css";
import "./styles/Home.css";
import {Link} from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      if(email=="admin" && password == "admin"){
   
    }
    else{
       // alert('Invalid Username or Password');
        return;
    }
      return email.length > 0 && password.length > 0;
      
      
      
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      return
       /*   */
    }
  
    return (
      <div className='home'style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link to="/materialtable">
          <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button></Link>
          
        </Form>
      </div></div>
    );
  }