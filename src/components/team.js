import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    }
  }

  increaseScore() {
    let currentScore = this.state.score;

    this.setState({
      score: currentScore += 1
    });
  }

  decreaseScore() {
    let currentScore = this.state.score;

    if (currentScore > 0) {
      this.setState({
        score: currentScore -= 1,
      });
    }
  }

  resetScore() {
    this.setState({
      score: 0
    })
  }

  fontSize() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;

    let portraitMode = height > width;
    let landScapeMode = width > height;

    if (landScapeMode) {
      return Dimensions.get('window').width * 0.1;
    } else {
      return Dimensions.get('window').height * 0.08;
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{fontSize: this.fontSize() }}>{this.state.score}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

module.exports = Team;
