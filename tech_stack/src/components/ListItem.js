import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  // componentWillUpdate() {
  //   LayoutAnimation.spring();
  // }

  renderDescription = () => {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
  };

  render() {

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.item.id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{this.props.library.item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
