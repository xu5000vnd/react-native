import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';
import EmployeeList from './components/employee/EmployeeList';
import EmployeeCreate from './components/employee/EmployeeCreate';
import EmployeeEdit from './components/employee/EmployeeEdit';
import { employeeRefresh, loginFormRefresh } from './actions';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" initial>
            <Scene
              key="login"
              component={LoginForm} title="Please Login"
              onEnter={() => this.props.loginFormRefresh()}
            />
            <Scene key="register" component={RegisterForm} title="Log up" />
          </Scene>
          <Scene key="main">
            <Scene
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
            />

            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Create Employee"
              onEnter={() => this.props.employeeRefresh()}
            />

            <Scene
              key="employeeEdit"
              component={EmployeeEdit}
              title="Edit Employee"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default connect(null, { employeeRefresh, loginFormRefresh })(RouterComponent);
