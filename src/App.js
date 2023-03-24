import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Tasks from './components/Tasks';
import Login from './components/Login';
import { withCookies } from 'react-cookie';
import Profile from './components/Profile';
import jwtDecode from 'jwt-decode';
import SignUp from './components/SignUp';

class App extends Component {
  state = {
    jwt: ''
  }

  setCookie = (field, value) => {
    const { cookies } = this.props;
    cookies.set(field, value, { path: '/' });
  }

  getCookie = (field) => {
    const cookie = this.props.cookies.get(field);
    return cookie === 'undefined' ? '' : cookie;
  }

  updateJwt = (jwt) => {
    this.setState({ jwt });
    this.setCookie('jwt', jwt);
  }

  handleProfile = () => {
    return jwtDecode(this.getCookie('jwt'));
  }

  componentDidMount() {
    this.updateJwt(this.getCookie('jwt'));
  }



  render() {
    return (
      <div className='mx-5'>
        <NavBar jwt={this.state.jwt} updateJwt={this.updateJwt} />
        <div className='content mt-4 mx-2'>
          <Routes>
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/login' element={<Login updateJwt={this.updateJwt} getCookie={this.getCookie} setCookie={this.setCookie} />} />
            <Route path='/signup' element={<SignUp updateJwt={this.updateJwt} getCookie={this.getCookie} setCookie={this.setCookie}/>} />
            <Route path='/profile' element={<Profile getData={this.handleProfile} />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default withCookies(App);