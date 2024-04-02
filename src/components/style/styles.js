import {StyleSheet, Text, View} from 'react-native';
import { color } from 'react-native-reanimated';
import road from "../../assests/road.jpg"

export default StyleSheet.create({
       card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin:7,
      
       
       },

       barButton:{
         borderRadius:30,
         color:"#000"
       },
       backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },

       text:{
      
        textAlign:"center",
        height : 44 ,
        width :44,
        fontSize:29,
        color:"#5B7594",
        marginLeft:10,
        backgroundColor:'#DCEEF2',
        borderRadius: 10,
       },

       image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius:50,
    
        alignItems: 'center',
        textAlign: 'center',
        margin:7,
       
        backgroundColor:"#fff9",
      
      },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center", alignItems: "center"
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 22,
    paddingRight: 90,
    paddingLeft: 90,
    paddingBottom:20,
    paddingTop:20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  closeButton: {
    backgroundColor: '#FFB500',
    width: 44,
    height: 44,
    borderRadius: 44/2,
    position: 'absolute',
    top:0,
    right:0,
  },

  addButton: {
   
    justifyContent: 'center',
    backgroundColor: '#FFB500',
    width: 100,
    height: 44,
    borderRadius: 15,
    
  },

  smallCircleLeft: {
   
    backgroundColor: '#FFB500',
    width: 44,
    height: 44,
    borderRadius: 44/2,
    
    left:0,
    
  },

  smallCircleRight: {
   
    backgroundColor: '#FFB500',
    width: 44,
    height: 44,
    borderRadius: 44/2,
   
    right:0,
    
  },

  
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
