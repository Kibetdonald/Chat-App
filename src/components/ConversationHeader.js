import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { AntDesign, Feather } from '@expo/vector-icons';

const {height, width} = Dimensions.get("window")
export default function ConversationHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>62 Unread Messages</Text>
      <Pressable style={styles.button}>
        <Text style={styles.text2}>View</Text>
      </Pressable>
      <View style={styles.HeaderOptions}>
        <Pressable>
            <Text style={styles.text3}>All</Text>
        </Pressable>
       <View style={styles.RightHeaderOptions}>
       <AntDesign name="search1" size={24} color="white" />
        <Feather name="more-vertical" size={24} color="white" />
       </View>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: height/8

    },
    button:{
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: "white",
        marginTop: 10
    },
    text1:{
        fontSize: 32,
        fontWeight:"bold",
        color: "#fff"
    },
    text2:{
        fontSize: 20,
        fontWeight:"200",
        color: "#fff"
    },
    text3:{
        fontSize: 22,
        fontWeight:"200",
         textDecorationLine: "underline",
         color: "#fff"
    },
    HeaderOptions:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width,
        paddingVertical: 30,
        paddingHorizontal: 20
        
    },
    RightHeaderOptions:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 70
    },

})