import React, {useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import stylesMain from '../../../../styles/main.tsx';
import styles from './styles.tsx';
import {TextInput, Button, IconButton} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import GoBack from '../../../../components/GoBack';

type ConnectionProps = {
  navigation: StackNavigationProp<any>;
};

const AuthConnection: React.FC<ConnectionProps> = ({navigation}) => {
  const [text, setText] = useState('');

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  const handleButtonPress = () => {};
  const test = require('../../../../assets/icons/retour.png');

  return (
    <View>
      <GoBack onPress={() => navigation.navigate('Home')} />
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <Text style={styles.title}>Se connecter</Text>
          <TextInput
            label={<Text style={{color: Colors.red}}>Adresse mail</Text>}
            placeholder={'Adresse mail'}
            placeholderTextColor={'#8391A1'}
            outlineStyle={[styles.textInputsOutline]}
            activeOutlineColor={Colors.red}
            textColor={'black'}
            value={text}
            onChangeText={handleInputChange}
            mode={'outlined'}
            style={styles.textInputs}
          />
          <Button mode="contained" onPress={handleButtonPress}>
            Valider
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthConnection;
