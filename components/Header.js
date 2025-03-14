import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={{ backgroundColor: "#003580", height: 65, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>

            <Pressable style={{ flexDirection: "row", alignItems: "center", borderColor: "white", borderWidth: 1, borderRadius: 25, padding: 8 }}>
                <Ionicons name="bed-outline" size={26} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 15 }}>Stay</Text>
            </Pressable>

            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="airplane-outline" size={26} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 15 }}>Flights</Text>
            </Pressable>

            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="car-outline" size={26} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 15 }}>Car Rental</Text>
            </Pressable>

            <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="taxi" size={22} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 15 }}>Taxi</Text>
            </Pressable>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})