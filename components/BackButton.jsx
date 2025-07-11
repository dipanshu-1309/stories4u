import { Pressable, StyleSheet } from 'react-native'
import Icon from '../assets/icons'


const  BackButton = ({size=26, router})=> {
  return (
    <Pressable onPress={() =>router.back()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} color='#000000' />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button:{
    alignSelf: 'flex-start',
    padding:5,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.07)'
  }
})