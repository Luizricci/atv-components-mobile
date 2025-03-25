import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Detalhes</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 10,
        marginTop: 20,
        width: 300,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
    },
    textButton: {
        color: "white",
    },
});