import React from 'react';
import Login from './components/Screens/Login/Login';
import Sites from './components/Screens/Sites/Sites';
import Contact from './components/Screens/Contacts/Contact';
import Project from './components/Screens/Projects/Projects';
import Details from './components/Screens/Details/Details';
import InspectionResult from './components/Screens/InspectionResult/InspectionResult';
import Inspection from './components/Screens/Inspection/Inspection';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { setToken } from './components/Session/token';
import Scanner from './components/Screens/QR Scanner/Scanner';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SitesStack({ userId, token }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sites" options={{ headerShown: true }} >
        {(props) => <Sites {...props} userId={userId} token={token} />}
      </Stack.Screen>
      <Stack.Screen name="Projects" component={Project} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Inspection" component={Inspection} />
      <Stack.Screen name="InspectionResult" component={InspectionResult} />

    </Stack.Navigator>
  );
}

function Home({ route }) {
  const { token, userId } = route.params;
  setToken(token);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'home-outline'; 
          } 
          else if (route.name === 'QR Code') {
            iconName = focused ? 'qr-code' : 'qr-code-outline'; 
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'scan' : 'scan-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'people' : 'people-outline'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'skyblue',  
        tabBarInactiveTintColor: 'gray',  
      })}
    >
      <Tab.Screen name="Main" options={{ headerShown: false }}>
        {(props) => <SitesStack {...props} userId={userId} token={token} />}
      </Tab.Screen>
      <Tab.Screen name="QR Code" component={Scanner} />
      {/* <Tab.Screen name="Scanner" component={Contact} /> */}
      <Tab.Screen name="Contacts" component={Contact} />
      {/* <Tab.Screen
        name="Projects"
        component={Project}
        options={{
          tabBarButton: () => null, 
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
