import React from 'react';
import { View,Text,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import add from '../../assets/add.png';
import confirm from '../../assets/confirm.png';


export default function Footer({icon,newTask} ) {
 return (
 
   <View style={styles.container}>
     <TouchableOpacity style={styles.button} onPress={newTask}>
       <Image source={icon === 'add' ? add : confirm} style={styles.Image}/>
     </TouchableOpacity>
      <Text style={styles.text}>
        Organizando sua vida
      </Text>
   </View>
  );
}