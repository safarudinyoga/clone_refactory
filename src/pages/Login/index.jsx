import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import './_login.sass';

import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Img from '../../components/Img';

import Logo from '../../assets/logo.png'

const Login = (props) => {

  const history = useHistory();

  const [input, setInput] = useState({
    username: '',
    password: '',
    submitted: false,
  });
  const { username, password, submitted } = input;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    setInput((state) => ({ ...state, submitted: true }));
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      history.push('/')
    }
  };

  return (
    <div className="containerlogin">
      <form
        className="containerinput"
        onSubmit={handleSubmit}
      >
        <Img
          src={Logo}
          alt="companylogo"
          className="logocompanylogin pointer"
        />
        <div className="username">
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChange}
            value={username}
            className={submitted && !username ? 'border-error' : ''}
          />
        </div>
        <div className="password">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            className={submitted && !password ? 'border-error' : ''}
          />
        </div>
        {submitted && (!username || !password)
        && (
          <Text
            Tag="h5"
            className="reg t-highlight center-align"
            text={!username && !password ? "Username dan Password tidak boleh kosong!" : !username ? "Username tidak boleh kosong!" : !password ? 'Password tidak boleh kosong!' : ''}
            style={{ margin: '16px 0' }}
          />
        )}
          <Button
            type="submit"
            className="button t-black reg center-align margin0"
            text="Login"
          />
      </form>
    </div>
  );
};

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
