import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import SplashScreen from "../screens/SplashScreen";
import ListPesertaScreen from "../screens/ListPesertaScreen";

const Stack =  createNativeStackNavigator();


export const Router = () =>{
    return(
        <Stack.Navigator initialRouteName="InitialScreen" >
            <Stack.Screen name='InitialScreen' component={SplashScreen} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Regist" component={RegistrationScreen} options={{headerShown:false}} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />


        </Stack.Navigator>
    )
}