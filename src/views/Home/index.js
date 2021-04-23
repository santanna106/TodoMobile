import React,{useState,useEffect} from 'react';
import { View,Text,StatusBar,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import api from '../../services/api';
import styles from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';


export default function Home({navigation}) {
  const [filtroAtivo,setFiltroAtivo] = useState('all');
  const [loading,setLoading] = useState(false);
  const [lateCount,setLateCount] = useState();
  const [tasks,setTasks] = useState([]);

  function notification(){
    setFiltroAtivo('late');
  }

  async function loadTasks(){
    setLoading(true);
   await api.get(`task/filter/${filtroAtivo}/11.11.11.11.110`).then(response => {
      setTasks(response.data)
      setLoading(false);
    })

  }

  async function lateVerify(){
   
   await api.get(`task/filter/late/11.11.11.11.110`)
   .then(response => {
      setLateCount(response.data.length);
      
    })

  }

  function addTask(){
    navigation.navigate('Task');
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
    
  },[filtroAtivo]);

 return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor={styles.statusBar.backgroundColor}  />
        <Header showNotification={true} showBack={false} pressNotification={notification} late={lateCount} />
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => setFiltroAtivo('all')}>
            <Text style={filtroAtivo ==='all' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Todos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('today')}>
            <Text style={filtroAtivo ==='today' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Hoje
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('week')}>
            <Text style={filtroAtivo ==='week' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Semana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('month')}>
            <Text style={filtroAtivo ==='month' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Mês
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('year')}>
            <Text style={filtroAtivo ==='year' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Ano
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
           <Text style={styles.titleText}>TAREFAS {filtroAtivo === 'late' && ' ATRASADAS'}</Text>
        </View>

        
         
           <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
          {
             loading 
             ? 
                <ActivityIndicator size={50} color={'#EA6C0C'}/>
             :
                tasks.map((element) => {
                  return (<TaskCard key={element.id} title={element.title} when={element.when} type={element.type}/>);
                })
          }

        </ScrollView>
    
        
            
        <Footer style={styles.footer} icon={'add'} newTask={addTask}/>
    </View>
  );
}