import { View, StyleSheet } from 'react-native'
import React from 'react'
import ConversationHeader from '../components/ConversationHeader'
import ListofConversations from '../components/ListofConversations'
import TopHeader from '../components/TopHeader'

export default function ConversationScreen() {
  return (
    <View style={styles.container}>
      <TopHeader/>
    <ConversationHeader/>
    <ListofConversations/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#424242'
  }
})