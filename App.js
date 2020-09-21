import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Component } from "react";
import * as Print from "expo-print";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./Background_image.jpg")}
      style={{
        flex: 1,
        width: 375,
        flexDirection: "column",
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView
        style={{
          flex: 0.55,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="Enter information"
          onPress={() => navigation.navigate("getData")}
        />
        <Button
          title="Go to info"
          onPress={() => navigation.navigate("info")}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

var data_dict = {
  reception: " ",
  marriage: " ",
};

function DetailsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./Background_image.jpg")}
      style={{
        flex: 1,
        width: 375,
        flexDirection: "column",
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <Text>reception: {data_dict["reception"]}</Text>

        <Text>marriage: {data_dict["marriage"]}</Text>

        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const getData = () => {
  const [value1, onChangeText1] = React.useState(data_dict["reception"]);
  const [value2, onChangeText2] = React.useState(data_dict["marriage"]);

  data_dict["reception"] = value1;
  data_dict["marriage"] = value2;

  return (
    <ImageBackground
      source={require("./Background_image.jpg")}
      style={{
        flex: 1,
        width: 375,
        flexDirection: "column",
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <Text>Reception:</Text>
        <TextInput
          style={{
            height: 40,
            width: 60,
            borderColor: "gray",
            backgroundColor: "#fff",
            borderWidth: 1,
          }}
          onChangeText={(text) => onChangeText1(text)}
          value={value1}
        />

        <Text>Marriage:</Text>
        <TextInput
          style={{
            height: 40,
            width: 60,
            borderColor: "gray",
            backgroundColor: "#fff",
            borderWidth: 1,
          }}
          onChangeText={(text) => onChangeText2(text)}
          value={value2}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="info" component={DetailsScreen} />
        <Stack.Screen name="getData" component={getData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
