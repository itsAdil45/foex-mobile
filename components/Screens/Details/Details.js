import React, { useEffect } from 'react';
import { Text, View, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import styles from './Style';
import { useGetData } from '../../Hooks/useGetData';
const Job = ({job, navigation}) => {
    return (
        <TouchableOpacity style={styles.jobContainer} onPress={() => navigation.navigate('Inspection',{job:job})}>
            <Text style={{ color: "skyblue", fontWeight: '800' }}>{job.location.title}</Text>

            <View style={styles.jobDetails}>
                <Text>Area Path</Text>
                <Text style={[styles.value]}>{job.areaExInformation}</Text>
            </View>

            <View style={styles.jobDetails}>
                <Text>Loc ID</Text>
                <Text style={[styles.value, { fontSize: 12, marginTop: 1 }]}>{job.location.id}</Text>
            </View>

            <View style={styles.jobDetails}>
                <Text>Tag ID</Text>
                <Text style={[styles.value]}></Text>
            </View>

            <View style={styles.jobDetails}>
                <Text>Loc Type</Text>
                <Text style={[styles.value]}>{job.location.type}</Text>
            </View>

            <View style={styles.jobDetails}>
                <Text>Inspection Type</Text>
                <View style={styles.jobInfo}>
                    <Text>Inspection Grade</Text>
                    <Text style={[styles.value, { textAlign: 'right' }]}>{job.gradeOfInspection}</Text>
                </View>
            </View>

            <View style={styles.jobDetails}>
                <Text>My Progress</Text>
                <Text style={{ color: "green", fontWeight: '800' }}>{job.completedPercentage}% Completed</Text>
            </View>
        </TouchableOpacity>
    );
};
export default function Details({ route, navigation }) {
    const { project , userId, token} = route.params;
    const { loading, LoadData: LoadJobs, data: jobs } = useGetData(`http://devapi.foexsuite.com/api/projects/${project.id}/users/${userId}/jobs`);

    useEffect(() => {
      if (userId && project && token) {
        LoadJobs();
      }
    }, [userId, project, token]);
    return (
        <ScrollView style={{ flex: 1  ,backgroundColor:"white"}}>
            <View style={styles.siteContainer}>
                <View style={styles.info}>
                    <Text>Project Name</Text>
                    <Text style={[styles.value]}>{project.title}</Text>
                </View>
                <View style={styles.info}>
                    <Text>Project ID</Text>
                    <Text style={[styles.value]}>{project.id}</Text>
                </View>
                <View style={styles.details}>
                    <View>
                        <Text>Start Date</Text>
                        <Text style={[styles.value]}>{project.startDate.split('T')[0]}</Text>
                    </View>
                    <View>
                        <Text style={{ alignSelf: "flex-end" }}>End Date</Text>
                        <Text style={[styles.value]}>
                            <Text style={styles.delayTxt}>(Delayed)</Text>{' '}
                            {project.startDate.split('T')[0]}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.jobs}>
                {jobs.length === 0 ? (
                    <View style={styles.info}>
                        <Text>Jobs</Text>
                        <Text style={[styles.projectDetails, styles.value]}>No Jobs Found</Text>
                    </View>
                ) : (
                    <FlatList
                        data={jobs}
                        renderItem={({ item }) => <Job job={item} navigation={navigation}/>}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false} 
                    />
                )}
            </View>
        </ScrollView>
    );
}
