import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList, Pressable } from "react-native";
import styles from "./dashboardStyles";

const DashboardPage = () => {
    const [allConnections, setAllConnections] = useState([]);
    const [filteredConnections, setFilteredConnections] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [pressedItem, setPressedItem] = useState(null);
    //set dummy data for connections
    
    useEffect(() => {
        // Filter and sort whenever searchText changes
        if (searchText.trim() === "") {
            setFilteredConnections([...allConnections]);
            return;
        }
        const filtered = allConnections
            .filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
    
        setFilteredConnections(filtered);
    }, [searchText]);  

    useEffect(() => {
        const dummyConnections = [
            {name: "John Doe", status: "Online"},
            {name: "Jane Doe", status: "Offline"},
            {name: "John Smith", status: "Online"},
            {name: "Jane Smith", status: "Offline"},
            {name: "Jane Smith 1", status: "Offline"},
            {name: "Jane Smith 2", status: "Offline"},
            {name: "Jane Smith 3 ", status: "Offline"},
            {name: "Jane Smith 4", status: "Offline"},
            {name: "Jane Smith 5", status: "Offline"},
            {name: "Jane Smith 6", status: "Offline"},
            {name: "Jane Smith 7", status: "Offline"},
            {name: "Jane Smith 8", status: "Offline"}
        ];
        setAllConnections(dummyConnections);
        setFilteredConnections(dummyConnections);
    }, []);

    return(
        <View>
            <Text style={styles.chatterHeading}>Chatter</Text>
            <View style={styles.searchContainer}>
                <View style = {styles.searchBox}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSearchText}
                        value={searchText}
                        placeholder="Search for connections"
                    />
                </View>
            </View>
            <View>
                <FlatList
                    style={styles.connectionListContainer}
                    contentContainerStyle={{justifyContent: "center"}}
                    data={filteredConnections}
                    renderItem={({item}) => {
                        const isPressed = pressedItem === item.name;
                        return(
                            <Pressable
                                onPressIn={() => setPressedItem(item.name)}
                                onPressOut={() => setPressedItem(null)}
                                style={({pressed}) => [
                                    styles.connectionListItem,
                                    isPressed && styles.pressedItem,
                                    pressed && styles.pressedItem
                                ]}
                            >
                                <View >
                                    <Text style={{fontSize : 20}}>{item.name}</Text>
                                    <Text>{item.status}</Text>
                                </View>
                            </Pressable>
                            
                        )
                    }}
                />
            </View>
            
        </View>
    )
}

export default DashboardPage;