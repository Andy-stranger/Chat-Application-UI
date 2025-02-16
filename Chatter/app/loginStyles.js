import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        parent:{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 40,
            marginTop: "50%"
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "90%"
        },
        input: {
            width: "80%",
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginVertical: 10,
            marginTop: 50
        },
        button: {
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            marginRight: "10%",
            marginTop: "10%"
        },
        buttonText: {
            color: "white",
            fontWeight: "bold",
        },
        forgotPasswordLink:{
            color: 'blue',
            marginRight: "10%",
        },
        createAccountLink:{
            color: "blue",
        }
    }
);

export default styles;