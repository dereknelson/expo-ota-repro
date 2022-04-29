import { StatusBar } from 'expo-status-bar';
import { checkForUpdateAsync, Manifest} from 'expo-updates';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const checkUpdate = async () => {
    console.log('manifest', Manifest )
    const status = await checkForUpdateAsync()
    console.log('status', status )
  }
  return (
    <TouchableOpacity style={styles.container} onPress={checkUpdate} >
      <Text>Press to check update</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
