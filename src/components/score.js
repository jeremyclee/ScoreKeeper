import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import TeamScore from './team.js';

class Score extends Component {
  render() {
    return (
      <View style={styles.mainContainer} onLayout={(x) => {
        // if landscape change styling vs portrait. render sidebyside team scores in landscape?
      }}>
        <View style={styles.speechContainer}>
        </View>

        <TouchableOpacity style={{flex: 1, backgroundColor: 'blue'}}
          onPress={() => {
            this.refs.team1.increaseScore();
          }}
        >
        <View

          style={styles.teamScore}
        >
          <TeamScore
            ref={'team1'}
          />
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1, backgroundColor: 'red'}}
          onPress={() => {
            this.refs.team2.increaseScore();
          }}
        >
        <View style={styles.teamScore}>
          <TeamScore ref={'team2'} />
        </View>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'blue'}}
            onPress={() => {
              this.refs.team1.resetScore();
            }}
          >
            <View style={styles.footerBtn}>
              <Text>Reset team 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1, backgroundColor: 'red'}}
            onPress={() => {
              this.refs.team2.resetScore();
            }}
          >
          <View style={styles.footerBtn}>
            <Text>Reset team 2</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 60
  },
  teamScore: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row'
  },
  footerBtn: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  speechContainer: {
    flex: 0.2,
    borderColor: 'black',
    borderWidth: 1,
  }
});

module.exports = Score;