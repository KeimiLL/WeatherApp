import React, {useState} from 'react';
import { StyleSheet, View, Switch, Text } from 'react-native';
import Home from "./components/HomeScreen";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(true)
  const [text, setText] = useState('Press the switch!')

  const toggleSwitch = () => {
    if (isEnabled) {
      setText('Inactive')
    } else {
      setText('Active')
    }

    setIsEnabled(previousState => !previousState)
  }

  if (text == "Active") {
    return (
      <View style={styles.container}>
        <Home isEnabled={isEnabled}/>
  
  
        <Text>{text}</Text>
        <Switch
          trackColor={{false: 'grey', true: 'tomato'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor='grey'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Home/>


      <Text>{text}</Text>
      <Switch
        trackColor={{false: 'grey', true: 'tomato'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor='grey'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE141',
  },
});
