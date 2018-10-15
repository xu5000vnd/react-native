import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from '../common';
import { emailChanged, passwordChanged } from '../../actions';

class InputForm extends Component {
  onChangeEmail = (email) => {
    this.props.emailChanged(email);
  }

  onChangePassword = (password) => {
    this.props.passwordChanged(password);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ color: 'red', alignSelf: 'center' }}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={email => this.onChangeEmail(email)}
            value={this.props.email}
            // keyboardType='email-address'
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={password => this.onChangePassword(password)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged
})(InputForm);
