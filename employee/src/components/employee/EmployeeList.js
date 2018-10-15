import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { employeeFetch } from '../../actions';
import { Button, CardSection } from '../common';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }


  logOut = () => {
    firebase.auth().signOut();
    Actions.auth({ type: 'reset' });
  }

  renderRow = (employee) => {
    return (<ListItem employee={employee} />);
  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
        <CardSection>
          <Button onPress={this.logOut}>Log out</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; //{name: "Jane", phone: "555-555", shift: "monday", uid: "abcxyz"}
  });
  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
