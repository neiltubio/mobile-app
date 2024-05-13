import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Node1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Node 1 Detail Page</Text>
            {/* Add more content specific to Node 1 */}
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Node1;
