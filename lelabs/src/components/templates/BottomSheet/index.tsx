import React, { useRef } from 'react';
import { useEffect } from 'react';
import { Animated } from 'react-native';
import * as B from './styles';
import { PanGestureHandler } from 'react-native-gesture-handler';


interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

interface NativeEventProps {
  nativeEvent:{
    y: number;  
  }
}

const BottomSheet: React.FC<BottomSheetProps> = ({children, isVisible, onClose}) => {

  const translateY = useRef( new Animated.Value(0)).current;
  const barTranslateY = useRef(new Animated.Value(0)).current;

  const fadeIn = () => Animated.timing(translateY, {
    toValue: 300,
    duration: 400,
    useNativeDriver: true,
  }).start()

  const fadeOut = () => Animated.timing(translateY, {
    toValue: 0,
    duration: 400,
    useNativeDriver: true,
  }).start(() => onClose());

  useEffect(() => {
    !!isVisible && fadeIn()
  }, [isVisible])
  

  const opacityControl = translateY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })
  const translateControl = translateY.interpolate({
    inputRange: [0, 300],
    outputRange: [300, 0],
    extrapolate: 'clamp'
  })
  const barControl = barTranslateY.interpolate({
    inputRange: [0,100],
    outputRange: [0,10],
    extrapolate: 'clamp'
  })


  const onHandlerStateChanged = (event: NativeEventProps) => {
    if(event.nativeEvent.y > 40) fadeOut()
  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: barTranslateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

 return(
  !!isVisible ? (
    <B.Container style={{opacity: opacityControl}}>
      
        <B.Content style={{transform:[{translateY: translateControl}]
        }}>
        <PanGestureHandler
          onHandlerStateChange={onHandlerStateChanged}
          onGestureEvent={animatedEvent}
        >
          <B.BarView style={{transform:[{translateY: barControl}]}}>
          <B.Bar />
          </B.BarView>
        </PanGestureHandler>
          {children}
        </B.Content>
  </B.Container>
  ) : <></>
 )
}

export default BottomSheet;