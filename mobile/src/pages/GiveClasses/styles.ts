import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: '#FFF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
  },

  buttonOk: {
    marginVertical: 40,
    height: 58,
    backgroundColor: '#04d361',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonOkText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;