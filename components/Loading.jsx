import { ActivityIndicator, View } from 'react-native'

const Loading =({size="large", color= '#fc4503'})=> {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color}/>
    </View>
  )
}

export default Loading