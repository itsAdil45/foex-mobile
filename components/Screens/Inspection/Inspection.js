import styles from './style';
import { Text, View, TextInput, Pressable, Image, StyleSheet,TouchableOpacity,FlatList , ScrollView} from 'react-native';
import { useGetData } from '../../Hooks/useGetData';
import React, { useEffect , useState} from 'react';

export default function Inspection({ route, navigation}) {
    const {job} =route.params;
    const [progressTitle, setProgressTitle] = useState([]);
    const { LoadData: LoadQuestions, data:questions } = useGetData(`http://devapi.foexsuite.com/api/inspection-forms/ex-i/questions/${job.id}`);
    const { LoadData: LoadProgress, data:progress } = useGetData(`http://devapi.foexsuite.com/api/jobs/${job.id}/fillable-inspection-forms`);
//  const { LoadData: LoadOptions, data:options } = useGetData(`http://devapi.foexsuite.com/api/inspection-form-questions/${questions.id}/inspection-question-field-options`);

    useEffect(() => {
      if (job) {
        LoadProgress(); 
        LoadQuestions();
      }
    }, [job]); 
    
    useEffect(() => {
      if (progress && Array.isArray(progress) && progress.length > 0 && progress[0].title) {
        setProgressTitle(progress[0].title);
      } else {
        console.log("No title available");
      }
    }, [progress]); 
    
    const loadOptions = (questionId) => {
        const { LoadData: LoadOptions, data: options } = useGetData(`http://devapi.foexsuite.com/api/inspection-form-questions/${questionId}/inspection-question-field-options`);
        LoadOptions();
        return options;
    };
    const HeaderBar=()=>{
        return(
            <View style={styles.headerMenu}>
                <View style={[styles.jobDetails, styles.EqName]}>
                    <Text style={{marginTop:10}}>Equipment Name</Text>
                    <Text style={{ color: "skyblue", fontWeight: '800' }}>{job.location.title}</Text>
                </View>
                <View style={{display:'inline', borderBottomWidth:2, width:"30%", padding:4,borderBottomColor:"purple"}}>
                    <Text style={styles.progressStatus}>{progressTitle} (15%)</Text>
                </View>
            </View>
        )
    }
    const EquipmentPerformanceList=({question})=>{
        return(
                <TouchableOpacity onPress={() => navigation.navigate('InspectionResult')}>
                    <View style={styles.questionContainer}>
                        <View style={styles.questionDetails}>
                            <Text style ={styles.questionNo}>{question.code}</Text>
                            <View style={{ width: '80%' }}> 
                            <Text style ={styles.question}>{question.question}</Text>
                            </View>
                        </View>
                        <View style={styles.statusValue}>
                            <Text style ={styles.question}>Pass</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
    }
    const Job = () => {
        return (
            <TouchableOpacity >
                <Text style={styles.title}>Inspection Results</Text>
                <View style={styles.jobDetails}>
                    <Text>Job ID</Text>
                    <Text style={[styles.value]}>{job.id}</Text>
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
                    <Text>Area Path</Text>
                    <Text style={[styles.value]}>{job.areaExInformation}</Text>
                </View>
    
                <View style={styles.jobDetails}>
                    <Text>Inspection Type</Text>
                    <View style={styles.jobInfo}>
                        <Text>Inspection Grade</Text>
                        <Text style={[styles.value, { textAlign: 'right' }]}>{job.gradeOfInspection}</Text>
                    </View>
                </View>
    

            </TouchableOpacity>
        );
    };
    return(
        <ScrollView stickyHeaderIndices={[1]} style={{ backgroundColor: 'white'}}>
             <Job/>
             <HeaderBar/>
             <FlatList
                data={questions}
                renderItem={({ item }) => <EquipmentPerformanceList question = {item} />}
                keyExtractor={item => item.id}
                scrollEnabled={false} // Disable FlatList scrolling

            />
          
        </ScrollView>
    )
}