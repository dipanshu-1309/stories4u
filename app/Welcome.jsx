import { ImageBackground, StyleSheet, View } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}> 
      <ImageBackground
        source={require('../assets/images/entrypage.jpg')}
        style={styles.bgimage}
        resizeMode="cover"
      >

      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  bgimage: {
    flex: 1, 
  },
});
