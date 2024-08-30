import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "react-native-ui-lib";
const Header = () => {
    const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={(_) => navigation.openDrawer()}
        >
            <Text>
                Open Drawer
            </Text>

        </TouchableOpacity>
    </View>
  )
}
export default Header