import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import ScreenWrapper from '../../components/ScreenWrapper'


const Mirrorstory = () => {
  return (
    <View style={styles.bg}>
      <ScreenWrapper>
        <Header title="The Man In The Mirror" showBackButton={true} />
        <ScrollView style={{ flex: 1 }}>
        <Text style={styles.content}>
It was the same view everyday. It had never changed. Not for Norman, anyway. He saw what he was shown, as it had been drilled into him from such a young age. When your other appears then make sure you are there. To greet him, so to speak. But mostly, to make sure he doesn't freak out. Imagine how your other would feel, having arrived to look at himself in the mirror, groggy from having just woken up, and still blurry eyed, and there was no reflection?{"\n\n"} 

He had been told all the rules. All of Norman's responsibilities had been drilled into him from a very young age. He understood, he truly did. But he was bored of it all. The others never appreciated the role the reflections played in their lives. It was all taboo. All left unsaid. Never to be spoken. They will never understand.{"\n\n"}

Well make them understand, Norman had tried to tell his fellow reflections, back in his energetic youth. But like his other, Norman was growing older. He wasn't old, not as far as he saw it. But older. The anger had dissipated, perhaps still there under the surface, but probably just converted to a more user friendly type of energy. Now Norman mostly felt boredom. The same old thing day in and day out. Be a reflection for your other. Be there when he needs you. Do not rock his world.{"\n\n"}

But why can't he rock his other's world? What would happen to him if he did? Norman knew what would happen. At least he felt he did.{"\n\n"}



Norman greeted the morning as he did every day of his life; earlier than his other. With the same appearance as his other. That part came naturally, being symbiotically connected to each other as they were. Smiling to himself, before any sign of life from the bedroom, Norman stood to attention just out of sight, but yet a million miles from his other's awareness. Separated only by a mirror, but connected by a lifetime of mystery and unknowns.{"\n\n"}

Today was a brand new day. For both Norman, and the man who shared his image, and had stared into his eyes thousands of times; and yet never knew.{"\n\n"}

His other approached the en-suite, and slowly opened the door. Reaching for the light switch, he flipped it as he stumbled his way to the mirror. A daily ritual. It had never really changed over the years. There were the odd times when a variation had developed. Perhaps he had been trialling a new way of starting the day. Perhaps he had slept in, or drunk too much the previous night. And then there were the times when he hadn't even stayed the night in his own home. Norman remembered those times well. Sharing the other side of the mirror with another reflection. Even reflections needed company.{"\n\n"}

But outside of these rare opportunities to experience variety, this had been his world. And this had been his routine. So much the same, so much repetition. But now Norman could feel a buzz, a sense of fate emerging. He felt, in a strange kind of way, somewhat human. Like his other. The tingling in his arms, the increased heart rate, the deep breath to steady his nerve. Decision time had come.{"\n\n"}

blindfold{"\n\n"}

Norman waited patiently for his other to stand in front of the mirror. He counted down the seconds knowing it would finally dawn on him. Standing quietly to the side of the mirror, just out of sight, Norman observed the realisation and horror develop on his other's face. He watched the colour drain away, and vanish; replaced as it was by an ashen non-colour. His other placed his hands against the sink below the mirror, spread wide to support his weakening body. Eyes wide open, he continued to stare in disbelief. He continued to stare at a blank mirror.{"\n\n"}

Norman gently entered the frame and faced his other. “Hello,” he said, expressionless.{"\n\n"}

“Who are you?” the other said, almost tripping over his words as his speaking abilities started to leave him.{"\n\n"}

“I'm you. Can't you tell?”{"\n\n"}

“You're me? What do you mean?” Norman's other struggled with the concept that was slowly emerging from the cognitive fog he found himself in. “You can't be me. I'm me.”{"\n\n"}

“We're both you. I'm your reflection. You're my other. We are both us.”{"\n\n"}

The other stood still, continuing to hold onto the sink for stability. He stared, wide eyed, at his reflection looking back at him. But not at all like it usually stared back at him. It was no longer his reflection. It most certainly looked like him. Norman's other took in that knowledge, a fearful realisation dawning on him.{"\n\n"}

Norman removed a hammer he had been hiding out of his other's view. “You may want to step away for a moment,” he told him. Upon the sight of the hammer entering his vision he promptly did as instructed. Norman smashed the mirror. Only one hit was needed. Multiple shards of glass dropped into the sink, and onto the floor.{"\n\n"}

The other stared in disbelief as his reflection climbed through the mirror and entered his world.{"\n\n"}

“Can you do that?” he asked.{"\n\n"}

“Seems I can. Wasn't really sure until just now,” Norman replied. He lifted the hammer above his head as he looked over at where his other was standing. He stepped forward.{"\n\n"}

“What are you doing? I thought I was you, and you were me.” He cowered, wide eyed, and frozen, as Norman approached.{"\n\n"}

“Yes, we are the same, it would seem,” Norman said as he swung the hammer down on his other. “But I'm bored of being your reflection.”
        </Text>
        </ScrollView>
      </ScreenWrapper>
    </View>
  )
}

export default Mirrorstory

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#e3e7ff',
    flex: 1,
  },
  content: {
    fontSize: 18,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 25
  }
})
