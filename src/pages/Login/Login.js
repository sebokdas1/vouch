import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Header from '../Components/Header';
import Swal from 'sweetalert2'

import axios from 'axios';

const Login = ({ setLoading }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(true)


    const handleLogin = event => {
        event.preventDefault()

        axios.post('https://reqres.in/api/login', { email, password })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    setLoading(true)
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successfully',
                        showConfirmButton: true,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                if (error.response.data.error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.response.data.error,
                    })

                }
            })
    }

    return (
        <div>
            <Header />
            <Container fluid>
                <Row className='align-items-center'>
                    <Col lg="4" md='6' sm='12' className='p-5'>
                        <div className="login_text text-center mb-4">
                            <h2 className='fw-bold'> Welcome Back </h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <input
                                className='form-control my-3'
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Email Address *'
                            />
                            <input
                                className='form-control my-3'
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Password *'
                            />
                            <button type='submit' className='btn d-block w-100 btn_primary my-3'>Login</button>
                            <small className="d-flex justify-content-between align-items-center my-3 primary_color">
                                <Form.Check
                                    id='remember'
                                    className='my-0'
                                    label='Remember Password'
                                    checked={remember}
                                    onClick={() => setRemember(!remember)}
                                />
                                <a href="#" classNainme='primary_color'> Forgot password? </a>
                            </small>
                        </form>
                    </Col>

                    <Col lg="8" md='6' className='primary_bg login_right'>
                        <img src="https://www.phitron.io/static/media/login.60b00691.png" alt="background" />
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Login;