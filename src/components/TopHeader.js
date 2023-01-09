import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function TopHeader() {
  return (
    <View style={styles.Wrapper}/>
  )
}
const styles = StyleSheet.create({
    Wrapper:{
        height: 28,
        backgroundColor: "#424242",
        width: "100%"
    }
})