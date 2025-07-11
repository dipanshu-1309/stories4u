import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StoryCard = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  card: {
    flexBasis: '48%',          
    margin: '1%',
    aspectRatio: 0.68,         
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#00000010', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
