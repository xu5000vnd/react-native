import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Spinner } from '../common';
import { loginUser } from '../../actions';
import InputForm from './InputForm';

class LoginForm extends Component {

  onPressButton = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton = () => {
    if (this.props.loading) {
      return (<Spinner size="large" />);
    }

    return (
      <Button onPress={this.onPressButton}>Login</Button>
    );
  }

  render() {
    return (
      <Card>
        <InputForm />

        <CardSection>
          {this.renderButton()}
          <Button onPress={() => Actions.register()}>Log up</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  loginUser
})(LoginForm);
