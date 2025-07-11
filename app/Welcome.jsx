import { useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Welcome = () => {

  const router = useRouter();

  return (
    <View style={styles.container}> 
      <ImageBackground
        source={require('../assets/images/entrypage.jpg')}
        style={styles.bgimage}
        resizeMode="cover"
      >
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={()=> router.push('/home')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'flex-end',   
    paddingHorizontal: 20,        
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#fc4503',
    paddingVertical: 24,
    paddingHorizontal: 70,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '600',
  },
});
