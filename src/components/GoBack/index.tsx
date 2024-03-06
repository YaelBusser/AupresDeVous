import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IconButton} from 'react-native-paper';
import React from 'react';
interface GoBackProps {
  onPress: () => void;
}

export const goBack: React.FC<GoBackProps> = ({onPress}) => {
  return (
    <IconButton
      icon="chevron-left"
      size={25}
      style={{
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 50,
        marginLeft: 20,
      }}
      onPressIn={() => onPress()}
    />
  );
};

export default goBack;
