import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        chatterHeading:{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "left",
            marginVertical: 20,
            marginLeft:"2.5%"
        },
        searchContainer:{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        },
        searchBox:{
            width: "95%",
            height: 50,
            justifyContent: "center", //aligns vertically center
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 20,
            marginTop: 20
        },
        connectionListContainer: {
            flexDirection: "column",
            marginTop: 55
        },
        connectionListItem:{
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 15,
            marginLeft: "2.5%",
            width: "95%",
            marginTop: 10,
            height: 70,
        },
        pressedItem: {
            backgroundColor: "#d1d1d1",
            transform: [{ scale: 0.95 }],
        },
    }
);

export default styles;