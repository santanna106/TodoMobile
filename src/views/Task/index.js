import React,{useState} from 'react';
import { 
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch

 } from 'react-native';

 import styles from './styles';

 import typeIcons from '../../utils/typeIcons';

 import Header from '../../components/Header';
 import Footer from '../../components/Footer';

 import DateTimeInput from '../../components/DateTimeInput/index.android';

export default function Task({navigation}) {

 function backClick(){
     navigation.navigate('Home');
 }

 const [done,setDone] = useState(false);
 return (
   <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <Header showBack={true} backClick={backClick} />
    <ScrollView style={{width:'100%'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
            {
                typeIcons.map((icon,index) => {
              return (
                    icon &&
                    <TouchableOpacity key={String(index)}> 
                        <Image source={icon} style={styles.imageIcon} />
                    </TouchableOpacity>
                    )
                })
            }
           
        </ScrollView>
        <Text style={styles.label}>Título</Text>
        <TextInput style={styles.input} maxLength={30} placeholder={'... lembre-me de fazer'} />

        <Text style={styles.label}>Detalhes</Text>
        <TextInput style={styles.inputArea} maxLength={200}
         multiline={true}
         placeholder={'... detalhes da atividade'} />

         <DateTimeInput type={'date'} />
         <DateTimeInput type={'time'} />

         <View style={styles.inLine}>
             <View style={styles.inputLine}>
                 <Switch onValueChange={() => setDone(!done) }  value={done} thumbColor={done ? '#00761B' : '#EA6C0C'}/>
                 <Text style={styles.switchLabel}>CONCLUÍDO</Text>
             </View> 

            <TouchableOpacity>
                <Text style={styles.removeLabel}>EXCLUIR</Text>
            </TouchableOpacity>
         </View>
    </ScrollView>
    <Footer/>

   </KeyboardAvoidingView>
  
  );
}