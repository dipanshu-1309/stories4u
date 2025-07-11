import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import ScreenWrapper from '../../components/ScreenWrapper'

const Offlinetwo = () => {
  return (
    <View style={styles.bg}>
      <ScreenWrapper>
        <Header title="Offline Part-2" showBackButton={true} />

        <View style={styles.content}>
          <Text style={styles.comingSoon}>Coming Soon</Text>
          <Text style={styles.description}>
            Thanks for reading! {"\n"}
            Feel free to explore our other stories while the author uploads the next chapter.
          </Text>
        </View>
      </ScreenWrapper>
    </View>
  )
}

export default Offlinetwo

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#e3e7ff',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  comingSoon: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    lineHeight: 22,
  },
})
