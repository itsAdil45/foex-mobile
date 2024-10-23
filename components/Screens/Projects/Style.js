import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:22,
        marginLeft:25,
        marginTop:10
    },
siteContainer:{
    margin:"5%",
    marginBottom:"1%",
    borderRadius:20,
    padding:20,
    borderColor: 'red', 
    borderWidth: 2,      
    
},
details:{
 details:"flex", 
 flexDirection:'row',
 justifyContent:'space-between' ,
 margin:'3%' 
},
section1:{
    marginBottom:20
},
sectionTitle:{
    textAlign:'center',
    fontWeight:"bold",
    fontSize:17
},
projectDetails:{
    textAlign:'center',
},
value:{
    color:"grey"
},
idValue:{
    fontSize:12,
    marginTop:2
},
delayTxt:{
    color:"red",
    fontWeight:"bold"
}

})
export default styles;