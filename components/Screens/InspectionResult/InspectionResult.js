import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity ,TextInput} from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function InspectionResult() {
  const [currentGrade, setCurrentGrade] = useState('');
  const [possibleGrade, setPossibleGrade] = useState({ D: false, C: false, V: false });
  const [inspectionResult, setInspectionResult] = useState('Fail');
  const [score, setScore] = useState('');
  const [comments, setComments] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>A15 Result Details</Text>

      <Text style={styles.label}>Grade of Inspection</Text>
      <View style={styles.gradeSection}>
        <View>
            <Text>Current</Text>
            <RadioButton.Group onValueChange={newValue => setCurrentGrade(newValue)} value={currentGrade}>
            <View style={styles.radioRow}>
                <RadioButton value="D" />
                <Text>D</Text>
                <RadioButton value="C" />
                <Text>C</Text>
                <RadioButton value="V" />
                <Text>V</Text>
            </View>
            </RadioButton.Group>
        </View>
        <View>
            <Text>Possible</Text>
            <View style={styles.checkboxRow}>
            <Checkbox
                status={possibleGrade.D ? 'checked' : 'unchecked'}
                onPress={() => setPossibleGrade({ ...possibleGrade, D: !possibleGrade.D })}
            />
            <Text>D</Text>
            <Checkbox
                status={possibleGrade.C ? 'checked' : 'unchecked'}
                onPress={() => setPossibleGrade({ ...possibleGrade, C: !possibleGrade.C })}
            />
            <Text>C</Text>
            <Checkbox
                status={possibleGrade.V ? 'checked' : 'unchecked'}
                onPress={() => setPossibleGrade({ ...possibleGrade, V: !possibleGrade.V })}
            />
            <Text>V</Text>
            </View>
        </View>
      </View>

      <Text style={styles.label}>Result of Inspection</Text>
      <RadioButton.Group onValueChange={newValue => setInspectionResult(newValue)} value={inspectionResult}>
        <View style={styles.radioRow}>
          <RadioButton value="Pass" />
          <Text>Pass</Text>
          <RadioButton value="Fail" />
          <Text>Fail</Text>
          <RadioButton value="N/A" />
          <Text>N/A</Text>
        </View>
      </RadioButton.Group>
        {inspectionResult=="N/A"?"":""}
        <View style={{ display: inspectionResult === "N/A" ? 'none' : 'flex' }}>
        <Text style={styles.label}>Score</Text>
      <RNPickerSelect
        onValueChange={(value) => setScore(value)}
        items={[
          { label: 'Pass/10', value: 'Pass/10' },
          { label: 'Pass/9', value: 'Pass/9' },
          { label: 'Pass/8', value: 'Pass/8' },
          { label: 'Fail/6', value: 'Fail/6' },
          { label: 'Fail/5', value: 'Fail/5' },
          { label: 'Fail/4', value: 'Fail/4' },
          { label: 'N/A', value: 'N/A' },
        ]}
        placeholder={{ label: 'Select a score...', value: null }}
        style={pickerSelectStyles}
      />
    </View>
      <Text style={styles.label}>Comments</Text>
      <TextInput
        style={styles.input}
        value={comments}
        onChangeText={setComments}
        placeholder="Comments"
        multiline
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  gradeSection: {
    marginBottom: 20,
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal:15
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#4da6ff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is not cut off
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is not cut off
  },
});
