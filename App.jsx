/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import FlatCards from './components/FlatCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor:'#242B2E', height: '100%'}}>
        <ScrollView>
          <FlatCards/>
          <FancyCards/>
          <FancyCards/>
          <ActionCard/>
          <ContactList/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
