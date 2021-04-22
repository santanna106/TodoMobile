import React,{useState} from 'react';
import { View,Text,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';


export default function Home() {
  const [filtroAtivo,setFiltroAtivo] = useState('todos');

 return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor={styles.statusBar.backgroundColor}  />
        <Header showNotification={true} showBack={false}/>
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => setFiltroAtivo('todos')}>
            <Text style={filtroAtivo ==='todos' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Todos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('hoje')}>
            <Text style={filtroAtivo ==='hoje' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Hoje
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('semana')}>
            <Text style={filtroAtivo ==='semana' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Semana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('mes')}>
            <Text style={filtroAtivo ==='mes' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Mês
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltroAtivo('ano')}>
            <Text style={filtroAtivo ==='ano' ? styles.filterTextActivity : styles.filterTextInactivity}>
              Ano
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
           <Text style={styles.titleText}>TAREFAS</Text>
        </View>
        <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
          <TaskCard done={true}/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>

        </ScrollView>
        
        <Footer style={styles.footer} icon={'add'}/>
    </View>
  );
}