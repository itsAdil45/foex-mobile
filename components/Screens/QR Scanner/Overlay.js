import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";


const Overlay = () => {
  const innerDimension = 300;

  return (
    <View style={styles.container}>
      {/* Outer full-screen black overlay with opacity */}
      <View style={styles.outerOverlay} />
        <View> 
            
        </View>
      {/* Inner transparent area */}
      <View
        style={[
          styles.innerOverlay,
          {
            width: innerDimension,
            height: innerDimension,
          },
        ]}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:50,
    borderTopWidth:100,
    borderBottomWidth:200,
    borderColor:'white',
    zIndex:1 ,
},
outerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerOverlay: {
    position: "absolute",
  },
});

export default Overlay;
