import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./loginStyles";

const LoginPage = () => {
    return(
        <View style={styles.parent}>
            <View style={styles.container}>
                <Text>Username: <TextInput style={styles.input}></TextInput></Text>
            </View>
            <View style={styles.container}>
                <Text>Password: <TextInput style={styles.input} secureTextEntry={true}></TextInput></Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordLink}>New user? Create account!</Text>
            </TouchableOpacity>
        </View>
    )
};

export default LoginPage;