import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { globalStyles } from "../../Styles/GlobalStylesheet";

export default function Apply() {
  return (
    <View>
      <Text style={globalStyles.pageHeader}>Apply page</Text>
      <View style={styles.formContainer}>
        <View style={styles.formBox}>
          <View>
            <Text>Leave Type</Text>
          </View>
          <View>
            <TextInput style={styles.formInput} />
          </View>
        </View>
        <View style={styles.formBox}>
          <View>
            <Text>Start Date</Text>
          </View>
          <View>
            <TextInput style={styles.formInput} />
          </View>
        </View>
        <View style={styles.formBox}>
          <View>
            <Text>End Date</Text>
          </View>
          <View>
            <TextInput style={styles.formInput} />
          </View>
        </View>
        <View style={styles.formBox}>
          <View>
            <Text>Days Applied For</Text>
          </View>
          <View>
            <TextInput style={styles.formInput} />
          </View>
        </View>
        <View style={styles.formBox}>
          <View>
            <Text>Description</Text>
          </View>
          <View>
            <TextInput style={styles.formInput} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable>
            <Text>Apply</Text>
          </Pressable>
          <Pressable>
            <Text>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
    flex: 1,
  },
  formBox: {
    margin: 20,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 7,
    height: 30,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
