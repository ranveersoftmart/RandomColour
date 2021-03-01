// import React from "react";
// import styled from 'styled-components';
// const colors =[ 'pink','black','red','brown','blue','yellow','purple','orange','grey','cyan','green']

// const getRendomcolorWithset =(colorscount) =>
// {
//     let newArray =[];
//     while(1){
//         for(let i = 0; i<colorscount; i++){
//             let rendomnumber = Math.floor(Math.random()*colors.length);
//             newArray.push(colors[rendomnumber]);
//         }
//         newArray =[...new Set(newArray)];
//         if(newArray.length === colorscount) break;
//     }
//     return newArray;
// }

// const getciruclarRendomcolors =(colorscount) => 
// {
//     alert("check");
//   let rendomnumber = Math.floor(Math.random()* colors.length);
//   let i =0;
//   const newArray =[];
//   while(i < colorscount){
//       newArray.push(colors[rendomnumber % colors.length]);
//       rendomnumber++;
//       i++;
//   }
//   return newArray;
// }

// const GetRendomcolors=(colorscount)=>{
//     const newArray =[];
//     const iscolorEXit = (tempColor) => {
//     for (var j= 0; j<newArray.length && tempColor !== newArray[j]; j+=1);
//     if (j<newArray.length) return true;
//     return false;
//     }
//     for(let i=0; i<colorscount; i+=1) {
//         const color = colors[Math.floor(Math.random()*colors.length)];
//         if(iscolorEXit(color)) i--;
//         else{
//             newArray.push(color)
//         }
//     }
//     return newArray;
// }

// const styledDiv = styled.div`
// width: 10rem;
// height: 3rem;
// background: ${({color}) => color};
// margin: 1rem;
// `;
// function Rendomcolores(){
//     const rendomcolorlist = getciruclarRendomcolors(5);
//  return(
//      <>
//      {
//           rendomcolorlist.map((color)=> <styledDiv color={color} />)

//      }
     
        
          
//       <h1>dynamic colors change </h1>
//      </>

//  )
// }
// export default Rendomcolores;
    

import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
 
export default class Rendomcolours extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      ColorHolder : '#00BCD4'
 
    }
  }
 
ChangeColorFunction=()=>
{
 
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
this.setState({
 
  ColorHolder : ColorCode
 
})
}
 
  render() {
    return (
   
      <View style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]} >
 
       <Button title="Change View Background Color" onPress={this.ChangeColorFunction} />
        
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});

