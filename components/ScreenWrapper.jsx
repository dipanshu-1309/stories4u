import { Children, isValidElement } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function ScreenWrapper({ children, bg }) {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View style={{ flex: 1, paddingTop }}>
      {
      
        Children.map(children, child =>
          isValidElement(child) ? child : null
        )
      }
    </View>
  );
}

export default ScreenWrapper;
