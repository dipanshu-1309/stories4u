import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import StoryCard from '../components/StoryCard';

const stories = [
  {
    id: '1',
    title: 'Offline',
    image: require('../assets/images/maryandjames.jpg'),
    route: '/(main)/offline'
  },
  {
    id: '2',
    title: 'Offline Part-2',
    image: require('../assets/images/maryandjames2.jpg'),
    route: '/(main)/offlinetwo'
  },
  {
     id: '3',
    title: 'The Man in The Mirror',
    image: require('../assets/images/mirror.jpg'),
    route: '/(main)/mirrorstory'
  }
];

const Home = () => {

  const router = useRouter();

  return (
    <View style={styles.bg}>

    <ScreenWrapper>
      <Header title="Library" showBackButton={false}/>
      <FlatList
          data={stories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <StoryCard
              image={item.image}
              title={item.title}
              onPress={() => router.push(item.route)}
            />
            )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />

    </ScreenWrapper>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  bg:{
    backgroundColor: '#e3e7ff',
    flex: 1,
  }
})