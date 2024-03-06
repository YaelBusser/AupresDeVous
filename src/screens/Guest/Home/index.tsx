import React from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import stylesMain from '../../../styles/main.tsx';
import styles from './styles.tsx';

type HomeGuestProps = {
  navigation: StackNavigationProp<any>;
};

const HomeGuest: React.FC<HomeGuestProps> = ({navigation}) => {
  const imageBackground = require('../../../assets/images/bg-home.jpg');

  return (
    <ImageBackground source={imageBackground}>
      <View style={styles.container}>
        <View style={styles.sectionPresentation}>
          <View style={styles.blockText}>
            <Text style={[styles.text, styles.title]}>Auprès de vous</Text>
            <Text style={[styles.text, styles.subTitle]}>
              Venez en aide aux autres
            </Text>
          </View>
          <View style={styles.blockButtons}>
            <Pressable
              onPress={() => navigation.navigate('AuthConnection')}
              style={stylesMain.AuthFormButton}>
              <Text style={stylesMain.AuthFormButtonText}>Se connecter</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('AuthConnection')}
              style={stylesMain.AuthFormButton}>
              <Text style={stylesMain.AuthFormButtonText}>S'inscrire</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeGuest;
