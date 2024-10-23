import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

title:{
    fontSize:22,
    fontWeight:'700',
    margin:15
},
value:{
    color:"grey"
},

jobDetails:{
    details:"flex", 
    flexDirection:'row',
    justifyContent:'space-between' ,
    marginTop:6,
    marginLeft:20,
    marginRight:20
},
questionContainer:{
    margin:10,
    padding:10,
    borderRadius:10,
    borderColor:"grey",
    elevation:3,
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"

},


questionDetails:{
    
    display:'flex',
    flexDirection:"row",
    width:"70%",
    justifyContent:"space-evenly",
    alignItems:"center"
},
progressStatus:{
    marginLeft:20,
    marginTop:10,
    fontSize:18,
    color:"purple",
},
EqName:{
    borderTopWidth:0.3,
    borderColor:"grey",
},
headerMenu:{
    position:'sticky',
    backgroundColor: 'white', // or any color you prefer
    zIndex: 1000, // Ensure it's on top of other content
    padding: 10, // Optional: adjust padding as needed
}
})
export default styles;