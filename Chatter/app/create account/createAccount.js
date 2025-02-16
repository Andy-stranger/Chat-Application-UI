import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./../login/loginStyles";

const CreateAccountPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function userNameInputHandler(text) {
        setUserName(text);
    }

    function pswdInputHandler(text) {
        setPassword(text);
    }

    function confirmPswdInputHandler(text) {
        setConfirmPassword(text);
    }

    function emailInputHandler(text) {
        setEmail(text);
    }

    function createAccountHandler() {
        userName === "admin" && password === "admin"
        ? console.log("Login Successful")
        : console.log("Login Failed");
    }

    function goBackHandler(){

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
                <Text>Email: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={userNameInputHandler}
                    value={email}
                    placeholder="Enter your email"
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

            <View style={styles.container}>
                <Text>Confirm Password: </Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={pswdInputHandler}
                    value={confirmPassword}
                    placeholder="Re-enter your password"
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={createAccountHandler}
            >
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={createAccountHandler}
            >
                <Text style={styles.buttonText}>Cancel and Go back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateAccountPage;