import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        parent:{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50%"
        },
        container: {
            flexDirection: "row",
            alignItems: "center",
            width: "70%"
        },
        input: {
            width: "80%",
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginVertical: 10,
        },
        button: {
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            marginTop: 10
        },
        buttonText: {
            color: "white",
            fontWeight: "bold",
        },
        forgotPasswordLink:{
            color: 'blue',
            marginTop: 10
        },
        createAccountLink:{
            color: "blue",
        }
    }
);

export default styles;