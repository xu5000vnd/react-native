import React, { Component } from 'react';
import { Picker, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../actions';
import { CardSection, Input } from '../common';

class EmployeeForm extends Component {

  onChangeInput = (prop, value) => {
    this.props.employeeUpdate({ prop, value });
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(text) => this.onChangeInput('name', text)}
            editable={!this.props.isEdit}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(text) => this.onChangeInput('phone', text)}
            keyboardType="number-pad"
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.labelShift}>Shift</Text>
          <Picker
            style={{ flex: 1, paddingBottom: 25, paddingTop: 10 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="Thursday" value="thursday" />
            <Picker.Item label="Friday" value="friday" />
            <Picker.Item label="Saturday" value="saturday" />
            <Picker.Item label="Sunday" value="sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelShift: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
