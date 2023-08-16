import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    function openWebsite(websiteLink){
        Linking.openURL(websiteLink) //open the website in the default browser returns a promise
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's New in JS 21 - ES12
            </Text>
        </View>
        <Image source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text  numberOfLines={3} style={styles.bodyContainer}>
                Just when you thought you were getting comfortable with ES11, ES12 is here. Let's take a look at some of the new features in ES12.
                Javascript is bringing 4 new features to the table with ES12. These features are:
                1. String.prototype.replaceAll()
                2. Promise.any()
                3. AggregateError
                4. WeakRef
                and stay tuned for future features.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es1')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://kunalprajapati.me')}>
                <Text style={styles.socialLinks}>Follow for More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({

    headingText:{
        fontSize: 26,
        fontWeight: 'bold',
        padding: 10,
        color: '#fff',
    },

    cardBody: {},

    cardImage: {
        height: 190,
    },

    elevatedCard: {},

    card: {
        width: 350,
        height: 360,
        borderRadius: 7,
        marginVertical: 12,
        marginHorizontal: 16,
    },

    elevatedCard: {
        backgroundColor: '#3944F0',
        elevation: 10,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },

    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },

    socialLinks: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
    },

    bodyContainer: {
       padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})