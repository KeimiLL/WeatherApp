import React, {useState} from 'react';
import { StyleSheet, View, Switch, Text } from 'react-native';
import Home from "./components/HomeScreen";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [text, setText] = useState('Señor mode OFF')

  const toggleSwitch = () => {
    if (isEnabled) {
      setText('Señor mode OFF')
    } else {
      setText('Señor mode ON')
    }

    setIsEnabled(previousState => !previousState)
  }

  return (
    <View style={styles.container}>
      <Home isEnabled={isEnabled}/>

      <View style={styles.switchView}>
        <Text style={[styles.switchTextOFF, isEnabled ? styles.switchTextON : null]}>{text}</Text>
        <Switch
          trackColor={{false: 'grey', true: 'tomato'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor='grey'
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE141',
  },
  switchView: {
    marginBottom: 30,
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxHeight: 70
  },
  switchTextOFF: {
    fontSize: 20,
    marginBottom: 10
  },
  switchTextON: {
    fontWeight: '800',
    color: 'tomato',    
  }
});
