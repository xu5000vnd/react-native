import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../../actions';
import { Card, CardSection, Button, Spinner } from '../common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onPressButton = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'monday' });
  }

  renderButton = () => {
    if (this.props.loading) {
      return (<Spinner size="large" />);
    }

    return (
      <Button onPress={this.onPressButton}>
        Create
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
