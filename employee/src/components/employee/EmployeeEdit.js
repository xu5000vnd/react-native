import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../../actions';
import { Card, CardSection, Button, Spinner, Confirm } from '../common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onPressButton = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onPressButtonDelete = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  onPressButtonYes = () => {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onPressButtonNo = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  onPressTextButton = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  renderButton = () => {
    if (this.props.loading) {
      return (<Spinner size="large" />);
    }

    return (
      <Button onPress={this.onPressButton}>
        Edit
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <EmployeeForm isEdit={true} />
        <CardSection>
          {this.renderButton()}
          <Button onPress={this.onPressButtonDelete}>
            Delete
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPressTextButton}>
            Text Schedule
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onPressYes={this.onPressButtonYes}
          onPressNo={this.onPressButtonNo}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, loading } = state.employeeForm;
  return { name, phone, shift, loading };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
