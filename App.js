import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Node1 from './components/Node1';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const firebaseConfig = {
  apiKey: "AIzaSyBkZ6bn_VKNxstvB9k2bZqTg5kvKaSSQ70",
  authDomain: "react-native-login-cbcc6.firebaseapp.com",
  projectId: "react-native-login-cbcc6",
  storageBucket: "react-native-login-cbcc6.appspot.com",
  messagingSenderId: "162065190938",
  appId: "1:162065190938:web:996dfcb9244c49a81d81a3",
  measurementId: "G-M5PWR06XQX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createStackNavigator();

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <ScrollView contentContainerStyle={styles.container}>
              {user ? (
                // Show user's email if user is authenticated
                <Dashboard user={user} handleAuthentication={handleAuthentication} />
              ) : (
                // Show sign-in or sign-up form if user is not authenticated
                <LoginForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  handleAuthentication={handleAuthentication}
                />
              )}
            </ScrollView>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});
