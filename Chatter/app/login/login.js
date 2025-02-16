import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./loginStyles";

const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function userNameInputHandler(text) {
        setUserName(text);
    }

    function pswdInputHandler(text) {
        setPassword(text);
    }

    function loginHandler() {
        userName === "admin" && password === "admin"
        ? console.log("Login Successful")
        : console.log("Login Failed");
    }

    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <Text>Username: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={userNameInputHandler}
                    value={userName}
                    placeholder="Enter your username"
                />
            </View>
            <View style={styles.container}>
                <Text>Password: </Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={pswdInputHandler}
                    value={password}
                    placeholder="Enter your password"
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={loginHandler}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordLink}>New user? Create account!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginPage;