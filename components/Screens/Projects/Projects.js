import React,{useEffect} from 'react';
import styles from './Style';
import {Text, View,FlatList ,TouchableOpacity,StyleSheet  } from 'react-native';
import { BlurView } from 'expo-blur'; 
import LottieView from 'lottie-react-native'; 
import { useGetData } from '../../Hooks/useGetData';

  const Project = ({navigation, project,userId, token}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {project:project,userId:userId, token:token})}>
    <View style={styles.siteContainer}>
    <View style={styles.section1}>
        <View style={styles.details}>
            <Text>Title:</Text>
            <Text style={styles.value}>{project.title}</Text>
        </View>
        <View style={styles.details}>
            <Text>ID:</Text>
            <Text style={[styles.value, styles.idValue]}>{project.id}</Text>
        </View>
        <View style={styles.details}>
            <Text>Start Date</Text>
            <Text style={styles.value}>{project.startDate.split('T')[0]}</Text>
        </View>
        <View style={styles.details}>
            <Text>End Date</Text>
            <Text style={styles.value} ><Text style={styles.delayTxt}>(Delayed) </Text>{project.endDate.split('T')[0]}</Text>
        </View>
        <View style={styles.details}>
            <Text>My Progress</Text>
            {project.myProgress==0?  
            <Text style={[styles.value, styles.delayTxt]} >Not Started</Text>: 
            <Text style={[styles.value, styles.delayTxt,{color:"green"}]} >{project.myProgress.toFixed(2)}% Completed</Text>}
        </View>
        <View style={styles.details}>
            <Text>Overall Progress</Text>
            {project.overallProgress==0?  
            <Text style={[styles.value, styles.delayTxt]} >Not Started</Text>: 
            <Text style={[styles.value, styles.delayTxt,{color:"green"}]} >{project.overallProgress.toFixed(2)}% Completed</Text>}
           
        </View>
    </View>

    </View>
  </TouchableOpacity >
  );
export default function Projects({navigation, route}) {
  const {siteId,userId,token} =route.params;
  const { loading, LoadData:LoadProjects, data:project } = useGetData(`http://devapi.foexsuite.com/api/sites/${siteId}/projects/${userId}/assigned`);

  useEffect(() => {
    if (userId && siteId &&token) {
      LoadProjects();
    }
  }, [userId, siteId, token]);
    return (
    <View style={{height:'100%' ,backgroundColor:"white"}}>
        <FlatList
        data={project}
        renderItem={({ item }) => <Project navigation = {navigation} project={item} userId={userId} token={token}/>}
        keyExtractor={item => item.id}
      />
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
    </View>
    )}
    const loaderStyles = StyleSheet.create({
      overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });