import React ,{useEffect}from 'react';
import {Text, View,FlatList ,TouchableOpacity,StyleSheet  } from 'react-native';
import styles from './style';
import { BlurView } from 'expo-blur'; 
import { useGetData } from '../../Hooks/useGetData';
import LottieView from 'lottie-react-native'; 
  const Site = ({ navigation , site , userId, token}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Projects',{siteId: site.id , userId:userId, token:token})}>
    <View style={styles.siteContainer}>
    <View style={styles.section1}>
        <View style={styles.details}>
            <Text>Site Name:</Text>
            <Text style={styles.value}>{site.siteName}</Text>
        </View>
        <View style={styles.details}>
            <Text>Site ID:</Text>
            <Text style={[styles.value, styles.idValue]}>{site.id}</Text>
        </View>
        <View style={styles.details}>
            <Text>Orgn ID</Text>
            <Text></Text>
        </View>
        <View style={styles.details}>
            <Text>Orgn Name</Text>
            <Text style={styles.value} >{site.organizationName}</Text>
        </View>
    </View>
    <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Project Details</Text>
     <View style={styles.details}>
            <View>
                <Text>Assigned</Text>
                <Text style={[styles.projectDetails , styles.value]}>{site.noOfProjectsAssigned}</Text>
            </View>
            <View>
                <Text>In Progress:</Text>
                <Text style={[styles.projectDetails , styles.value]}>{site.noOfProjectsInProgress}</Text>
            </View>
    </View>
    <View style={styles.details}>
            <View >
                <Text>Not Started</Text>
                <Text style={[styles.projectDetails , styles.value]}>{site.noOfProjectsNotStarted}</Text>
            </View>
            <View>
                <Text>Delayed</Text>
                <Text style={[styles.projectDetails , styles.value]}>{site.noOfProjectsDelayed}</Text>
            </View>
    </View>
    </View>
    </View>
  </TouchableOpacity >
  );
export default function Sites({ navigation, userId,token }) {
  const { loading, LoadData:LoadSites, data:sites } = useGetData(`http://devapi.foexsuite.com/api/users/${userId}/sites/assigned`);

  useEffect(() => {
    if (userId && token) {
      LoadSites();
    }
  }, [userId, token]);
  
    return(
    <View style={{height:'100%', backgroundColor:"white"}}>
      {loading && (
        <BlurView intensity={100} style={StyleSheet.absoluteFill} tint='extraLight'>
          <View style={loaderStyles.overlay}>
          <LottieView
          source={require('../../../animations/Animation - 1728387290861.json')} 
          autoPlay
          loop
          style={{ width: 250, height: 250 }} 
        />
          </View>
        </BlurView>
      )}
        <FlatList
        data={sites}
        renderItem={({ item })=> <Site navigation = {navigation} site={item} userId={userId} token={token}/>}
        keyExtractor={item => item.id}
      />

    </View>
    )

}
const loaderStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});