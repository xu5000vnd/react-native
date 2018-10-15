import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';
import { Card, CardSection, Button, Spinner } from '../common';
import InputForm from './InputForm';


class RegisterForm extends Component {

  onPressButton = () => {
    const { email, password } = this.props;
    this.props.registerUser({ email, password });
  }

  renderButton = () => {
    if (this.props.loading) {
      return (<Spinner size="large" />);
    }

    return (<Button onPress={this.onPressButton}>Register</Button>);
  }

  render() {
    return (
      <Card>
        <InputForm />

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { registerUser })(RegisterForm);