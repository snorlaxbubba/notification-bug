import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    // Linking,
    StyleSheet,
    StatusBar,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import * as Font from "expo-font";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Explore from "./src/pages/Explore";
import WeeklySwiper from "./src/pages/Swiper";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";


function MainStack() {
    return (
        <Tab.Navigator
            initialRouteName={"Explore"}>
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    title: "Faves",
                    color: "#E76E50",
                }}
            />

            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    title: "Contact",
                }}
            />

        </Tab.Navigator>
    );
}

function DrawerStack() {
    return (
        <SafeAreaProvider>
            <Drawer.Navigator
                initialRouteName="Favorites"
                screenOptions={{
                    headerShown: false,
                    drawerPosition: "right",
                    cardStyle: { backgroundColor: "transparent" },
                    drawerStyle: { backgroundColor: "#F3EEEA" },
                    drawerActiveBackgroundColor: "#E76E50",
                    drawerActiveTintColor: "white",
                }}>
                <Drawer.Screen name="Home" component={MainStack} />
                <Drawer.Screen name="WeeklyTop" component={WeeklySwiper} />
            </Drawer.Navigator>
        </SafeAreaProvider>
    );
}


export default function App() {
    return (
       
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <StatusBar
                    backgroundColor="#F3EEEA"
                    barStyle={"dark-content"}
                />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            animationEnabled: false,
                            cardStyle: { backgroundColor: "transparent" },
                        }}>
                        <Stack.Screen name="DrawerStack" component={DrawerStack} />

						<Stack.Screen name="About" component={About} />

                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
    },
    highlight: {
        fontWeight: "700",
    },
});