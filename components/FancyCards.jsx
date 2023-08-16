import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const FancyCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>FancyCards</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                }} style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City ,</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of jaipur , India. Built from red and pink sandstone. it is on the edge of the city palace</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
            
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        color: '#fff',
        fontFamily: 'cursive'
    },

    cardElevated: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },

    card: {
        height: 360,
        width: 350,
        borderRadius: 7,
        marginVertical: 12,
        marginHorizontal: 16
    },

    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000',
        fontSize: 14,
        marginBottom: 4,
    },
    cardDescription: {
        color: '#000',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6,

    },
    cardFooter: {
        color: '#000',
    },
})

export default FancyCards;
