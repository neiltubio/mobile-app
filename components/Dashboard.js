import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import the Node1, Node2, and Node3 detail pages
import Node1 from './Node1'; // Update import to use uppercase 'Node1'

const Card = ({ title, description, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
        </TouchableOpacity>
    );
};

const Dashboard = ({ user }) => {
    const navigation = useNavigation();

    const handleNodePress = (screenName) => {
        navigation.push(screenName); // Navigate to the respective node detail page
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard{user ? user.name : 'Guest'}</Text>
            <View style={styles.cardContainer}>
                <Card title="Node1" description="Description for Node1" onPress={() => handleNodePress('Node1')} />
                <Card title="Node2" description="Description for Node2" onPress={() => handleNodePress('Node2')} />
                <Card title="Node3" description="Description for Node3" onPress={() => handleNodePress('Node3')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    cardContainer: {
        width: '100%',
        maxWidth: 300,
        marginTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 15,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        marginTop: 10,
        fontSize: 14,
    },
});

export default Dashboard;
