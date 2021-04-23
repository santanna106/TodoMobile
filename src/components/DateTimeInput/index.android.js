import React,{useState} from 'react';
import { View,
         TouchableOpacity,
         Image,
         TextInput,
         Platform
          } from 'react-native';

import {format} from 'date-fns';

import DateTimePicker from '@react-native-community/datetimepicker';
import iconCalender from '../../assets/calendar.png';
import iconHour from '../../assets/clock.png';
import styles from './styles';

export default function DateTimeInput({type}) {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedValue) => {
     const currentDate = selectedValue || new Date();
     setDate(currentDate);
     setShow(false);
  };

 return (
   <TouchableOpacity onPress={() => setShow(true)}>
      <TextInput style={styles.input} placeholder={ type === 'date' ? 'Clique aqui para definir a data ...' 
            : 'Clique aqui para definir a hora...'}
            value={type === 'date' ? format(new Date(date),'dd/MM/yyyy') : format(new Date(date),'HH:mm') }
             />
      <Image style={styles.iconTextInput} source={ type === 'date' ? iconCalender : iconHour} />
      {
        show && 

        <DateTimePicker
            value={date}
            minimumDate={Date.parse(new Date())}
            is24Hour={true}
            display='default'
            mode={type}
            onChange={onChange}
        />

      }
      
   </TouchableOpacity>
  );
}