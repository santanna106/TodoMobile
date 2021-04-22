import React from 'react';
import { View ,Text,Image,TouchableOpacity} from 'react-native';
import styles from './styles';

import iconDefault from '../../assets/default.png';

export default function TaskCard({done}) {
 return (
     

       
       <TouchableOpacity style={[styles.card,done  && styles.cardDone]}>
           <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActived} />
                <Text style={styles.cardTitle}>Fazer Relatório</Text>
           </View>
           <View style={styles.cardRight}>
                <Text style={styles.cardDate}>17/10/2020</Text>
                <Text tyle={styles.cardHour}>10:00</Text>
           </View>
       </TouchableOpacity>
      

  );
}