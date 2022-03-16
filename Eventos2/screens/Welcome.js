import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Eventos from './Eventos';
import NewEvent from './NewEvent';
import Perfil from './Perfil';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Welcome () {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false, tabBarIcon: (tabInfo) => {
            return (
                <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                />
            );
            },}} name="Eventos" component={Eventos}
        />      
                
      <Tab.Screen options={{ headerShown: false, tabBarIcon: (tabInfo) => {
            return (
                <Ionicons
                name="add-circle"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                />
            );
            },}} name="Novo Evento" component={NewEvent}
        />    
      <Tab.Screen options={{ headerShown: false, tabBarIcon: (tabInfo) => {
            return (
                <Ionicons
                name="person"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                />
            );
            },}} name="Perfil" component={Perfil}
        />    
    </Tab.Navigator>
  );
}

export default Welcome;