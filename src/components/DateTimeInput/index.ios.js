import React,{useState} from 'react';
import { View,
         TouchableOpacity,
         Image,
         TextInput,
         Platform
          } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import iconCalender from '../../assets/calendar.png';
import iconHour from '../../assets/clock.png';
import styles from './styles';

export default function DateTimeInput({type}) {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [show, setShow] = useState(false);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (type == 'date') {
        const currentDate = selectedValue || new Date();
        setDate(currentDate);
    } else {
        const selectedTime = selectedValue || new Date();
        setTime(selectedTime);
    }
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

 return (
   <TouchableOpacity onPress={() => setShow(!show)}>
      <TextInput style={styles.input} placeholder={ type === 'date' ? 'Clique aqui para definir a data ...' 
            : 'Clique aqui para definir a hora...'} editable={false}
            value={date}
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