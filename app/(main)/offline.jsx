import { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { messages } from '../../constants/offlinemessages';

const Offline = () => {
  const [visibleMessages, setVisibleMessages] = useState([messages[0]]);
  const [index, setIndex] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [showEndText, setShowEndText] = useState(false);
  const scrollRef = useRef(null);

  const handleNext = () => {
    if (isTyping) return;

    // If already showed last message, show "To be continued" instead of button
    if (index === messages.length) {
      setShowEndText(true);
      return;
    }

    const nextMessage = messages[index];

    if (index % 5 === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, nextMessage]);
        setIndex(prev => prev + 1);
        scrollToBottom();
      }, 1300);
    } else {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, nextMessage]);
        setIndex(prev => prev + 1);
        scrollToBottom();
      }, 200);
    }
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.bg}>
      <ScreenWrapper>
        <Header title="Offline" showBackButton={true} />

        <View style={styles.contentWrapper}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.messagesContainer}
            showsVerticalScrollIndicator={false}
          >
            {visibleMessages.map((msg, i) => (
              <View key={i} style={styles.messageBlock}>
                <View style={styles.headerRow}>
                  <Text style={[
                    styles.name,
                    { color: msg.name === 'Mary' ? 'crimson' : 'purple' }
                  ]}>
                    {msg.name}
                  </Text>
                  <Text style={styles.time}> {msg.time}</Text>
                </View>

                {msg.text && (
                  <Text style={styles.message}>{msg.text}</Text>
                )}

                {msg.image && (
                  <Image source={msg.image} style={styles.image} resizeMode="cover" />
                )}
              </View>
            ))}

            {isTyping && (
              <Text style={styles.typingIndicator}>
                {messages[index]?.name} is typing...
              </Text>
            )}
          </ScrollView>

          {showEndText ? (
            <Text style={styles.endText}>To be continued...</Text>
          ) : (
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextBtnText}>Tap here{"\n"}to see the next message</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#e3e7ff',
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
    paddingTop: 10,
  },
  messageBlock: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 13,
    color: 'gray',
    marginLeft: 8,
  },
  message: {
    fontSize: 18,
    lineHeight: 24,
  },
  typingIndicator: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#555',
    marginHorizontal: 20,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 550,
    marginTop: 10,
    borderRadius: 10,
  },
  nextBtn: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#ccc',
    alignItems: 'center',
    margin: 16,
  },
  nextBtnText: {
    fontSize: 17,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#444',
  },
  endText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 20,
  },
});
