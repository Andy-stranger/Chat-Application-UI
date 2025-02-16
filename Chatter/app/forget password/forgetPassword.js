import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./../login/loginStyles";

const ChangePasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function pswdInputHandler(text) {
        setPassword(text);
    }

    function confirmPswdInputHandler(text) {
        setConfirmPassword(text);
    }

    function changePasswordHandler() {

    }

    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <Text>New Password: </Text>
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
                    onChangeText={confirmPswdInputHandler}
                    value={confirmPassword}
                    placeholder="Re-enter your password"
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={changePasswordHandler}
            >
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={changePasswordHandler}
            >
                <Text style={styles.buttonText}>Cancel and Go back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangePasswordPage;