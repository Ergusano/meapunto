import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export function RotatingCube() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const rotateZ = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateX = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateY = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.cube,
          {
            transform: [
              { perspective: 1000 },
              { rotateX },
              { rotateY },
              { rotateZ },
            ] as any,
          },
        ]}
      >
        {/* Cara frontal */}
        <View style={[styles.face, styles.front]} />
        {/* Cara trasera */}
        <View style={[styles.face, styles.back]} />
        {/* Cara superior */}
        <View style={[styles.face, styles.top]} />
        {/* Cara inferior */}
        <View style={[styles.face, styles.bottom]} />
        {/* Cara izquierda */}
        <View style={[styles.face, styles.left]} />
        {/* Cara derecha */}
        <View style={[styles.face, styles.right]} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  cube: {
    width: 150,
    height: 150,
    position: 'relative',
  },
  face: {
    position: 'absolute',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  front: {
    backgroundColor: '#FF6B6B',
    transform: [{ translateZ: 75 }],
  },
  back: {
    backgroundColor: '#4ECDC4',
    transform: [{ translateZ: -75 }, { rotateY: '180deg' }],
  },
  top: {
    backgroundColor: '#45B7D1',
    transform: [{ rotateX: '90deg' }, { translateZ: 75 }],
  },
  bottom: {
    backgroundColor: '#FFA07A',
    transform: [{ rotateX: '-90deg' }, { translateZ: 75 }],
  },
  left: {
    backgroundColor: '#98D8C8',
    transform: [{ rotateY: '-90deg' }, { translateZ: 75 }],
  },
  right: {
    backgroundColor: '#F7DC6F',
    transform: [{ rotateY: '90deg' }, { translateZ: 75 }],
  },
});
