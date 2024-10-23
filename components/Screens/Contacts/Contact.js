import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Contact = () => {
  // Function to open the phone dialer
  const openDialer = () => {
    const phoneNumber = ''; // Replace with the desired phone number
    Linking.openURL(`tel:${phoneNumber}`)
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDialer}>
        <Text style={styles.dialButton}>Dial Phone Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#596bba',
    width:"60%",
    color:"white"
  }
});

export default Contact;
