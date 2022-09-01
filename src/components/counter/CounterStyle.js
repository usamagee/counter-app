import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    Container: {
        flex: 1,
    },
    countContainer: {
        alignItems: "center",
        padding: 10,
        top: 350,

    },
    countText: {
        color: "#FF00FF",
        padding: 10,
        width: 100,
        textAlign:"center",
        backgroundColor:"#4C4E52",
        

    },
    button: {
        alignItems: "center",
        // backgroundColor: "white",
        padding: 10,
        position: "absolute",
        width: 151,
        height: 151,
        left: 100,
        top: 500,
    },
    buttonReset: {
        position: "absolute",
        width: 27,
        height: 27,
        left: 80,
        top: 510,
    }

})