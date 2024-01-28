import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async() => {
    // console.log("Submitting")
    // if (email.length<3) {
    //     console.log("Email too short")
    //     Alert.alert("Invalid email address")
    // }
    // if (password.length<5) {
    //     Alert.alert("Invalid Password")
    // }
    // console.log("Email :"+email ,"Password: "+password)
    console.log("Submit");
    const res = await fetch("https://localhost:7111/Authentication/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: email,
        password: password,
      }),
    });
    if (res.ok) {
        const data = await res.json(); // Assuming the server returns JSON
        console.log(data);
      } else {
        let errors = "";
        const errorData = await res.json();
        const errorArray = errorData.errors;
        for (let error in errorArray) {
            errors+=errorArray[error]+"."
            console.log(errorArray[error])
        }
        Alert.alert(errors)
        console.log(errorData.message)
      }
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.mylogoContainer}>
        <Image
          style={styles.mylogo}
          source={require("../../assets/Images/Untitled design.jpg")}
        />
      </View>
      <View style={styles.loginHeader}>
        <Text>Leave Management System</Text>
      </View>
      <View style={styles.formBox}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.formInput}
        />
      </View>
      <View style={styles.formBox}>
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.formInput}
        />
      </View>
      <View style={styles.loginButtonContainer}>
        <Pressable style={styles.loginButtonContainer} onPress={handleSubmit}>
          <Text>Log in</Text>
        </Pressable>
      </View>
      <Pressable style={styles.forgotPassword}>
        <Text style={styles.link}>Forgot password?</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    width: 350,
    backgroundColor: "skyblue",
    height: "80vh",
    borderRadius: 6,
  },
  formBox: {
    justifyContent: "center",
    marginLeft: 30,
    width: "80%",
    marginTop: 40,
  },
  formLabel: {},
  formInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "white",
    height: 30,
  },
  mylogoContainer: {
    height: "12vh",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  mylogo: {
    height: "7vh",
    width: 70,
  },
  loginHeader: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginButtonContainer: {
    width: "80%",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 50,
  },
  forgotPassword: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
});
