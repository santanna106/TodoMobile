import React from 'react';
import { View ,Text,Image,TouchableOpacity} from 'react-native';
import {format} from 'date-fns'

import styles from './styles';

import typeIcons from '../../utils/typeIcons';

export default function TaskCard({done,title,when,type}) {
 return (
     

       
       <TouchableOpacity style={[styles.card,done  && styles.cardDone]}>
           <View style={styles.cardLeft}>
                <Image source={typeIcons[type]} style={styles.typeActived} />
                <Text style={styles.cardTitle}>{title}</Text>
           </View>
           <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when),'dd/MM/yyyy')}</Text>
                <Text tyle={styles.cardHour}>{format(new Date(when),'HH:mm')}</Text>
           </View>
       </TouchableOpacity>
      

  );
}