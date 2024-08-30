import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { 
  FadeIn, 
  FadeOut, 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming 
} from 'react-native-reanimated';

const Inicio = () => {
  // Estado para controlar la visibilidad del título
  const [showTitle, setShowTitle] = useState(true);

  // useSharedValue para manejar el color de fondo animado
  const backgroundColor = useSharedValue('#87CEEB');

  // useAnimatedStyle para aplicar estilos animados al contenedor
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(backgroundColor.value, { duration: 2000 }), // Cambio de color de fondo con animación suave
    };
  });

  // Función para manejar el evento de presionar el botón
  const handlePress = () => {
    backgroundColor.value = '#FF6347'; // Cambiar color de fondo
    setShowTitle(false); // Ocultar título con animación de desvanecimiento
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {showTitle && (
        <Animated.Text 
          style={styles.title}
          entering={FadeIn.duration(2000)} // Título aparece con desvanecimiento
          exiting={FadeOut.duration(2000)} // Título desaparece con desvanecimiento
        >
          Bienvenido
        </Animated.Text>
      )}
      <TouchableOpacity 
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Inicio;
