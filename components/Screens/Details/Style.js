import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    siteContainer: {
        margin: "5%",
        padding: 20,
    },

details:{
 details:"flex", 
 flexDirection:'row',
 justifyContent:'space-between' ,
 margin:'3%' 
},

projectDetails:{
    textAlign:'center',
},
info:{
    margin:10
},
value:{
    color:"grey"
},
delayTxt:{
    color:"red",
    fontWeight:"bold"
},
jobDetails:{
    details:"flex", 
    flexDirection:'row',
    justifyContent:'space-between' ,
    marginTop:6,
    marginLeft:20,
    marginRight:20
},
jobInfo:{
    margin:0
},
jobs:{
padding:20
},
jobContainer:{
    borderRadius: 10,
    borderWidth: 1,       
    borderColor: '#ccc',     
    borderRadius: 10,
    padding: 10,
    marginBottom:20

}
    
})
export default styles;