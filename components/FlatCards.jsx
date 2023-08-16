import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const FlatCards = () => {
    return (
        
            <View>
                <Text style={styles.headingText}>FlatCards</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.container}>
                        {/* giving multiple styles to a component is possible by passing an array of styles */}
                        <View style={[styles.card, styles.cardOne]}> 
                            <Text style={styles.containerText}>FlatCard 1</Text>
                        </View>

                        <View style={[styles.card, styles.cardTwo]}> 
                            <Text style={styles.containerText}>FlatCard 1</Text>
                        </View>

                        <View style={[styles.card, styles.cardThree]}> 
                            <Text style={styles.containerText}>FlatCard 1</Text>
                        </View>
                        
                        <View style={[styles.card, styles.cardThree]}> 
                            <Text style={styles.containerText}>FlatCard 1</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 26,
        fontWeight: 'bold',
        padding: 10,
        color: '#fff',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,

    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
    containerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

})

export default FlatCards;
   