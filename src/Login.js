import React,{ useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BannerImage from '../src/assets/Todowall2.jpg';
import "./styles/Login.css";
import { useNavigate } from 'react-router-dom';
import "./styles/Home.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const validateForm=() =>{
      if(email==="admin" && password === "admin"){
        navigate('/materialtable');
       // alert(' Username or Password Match');
    }
    else{
     alert('Invalid Username or Password');
     navigate('/');
    }
     // return email.length > 0 && password.length > 0;
      
      
      
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
          
          <Button block="true" size="lg" onClick={()=>validateForm()} disabled={!email.length || !password.length}>
            Login
          </Button>
          
        </Form>
      </div></div>
    );
  }