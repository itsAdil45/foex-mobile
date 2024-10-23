import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    logo:{
      width:"40%",
      height:"30%",
      margin:"3%"
    },
    inputFields:{
      width:"60%",
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      padding: 10,
      margin:"2%"
    },
    loginBtn:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#596bba',
      width:"60%"

    },
    loginBtnText:{
      color:"white"
    },
    title:{
        fontSize:25,
        fontWeight:"bold"

    }
  });
  export default styles;