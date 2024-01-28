import { FlatList, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import React from "react";
import Barchart from "../Barchart";
import { globalStyles } from "../../Styles/GlobalStylesheet";

export default function Overview() {
  const [monthData, setMonthData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const name = "tinotenda.nyamande@students.uz.ac.zw";
      const res = await fetch(
        `https://localhost:7111/LeaveApplication/GetDaysPerMonth?Username=${name}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json(); // Assuming the server returns JSON
        let daysPerMonth = data["daysPerMonth"];
        let key = 1;
        let monthDataList = [];
        for (let item in daysPerMonth) {
          let monthObj = {};

          monthObj["month"] = item;
          monthObj["days"] = daysPerMonth[item];
          monthObj["key"] = key;
          monthDataList.push(monthObj);
          key++;
        }
        setMonthData(monthDataList);
      } else {
        let errors = "";
        const errorData = await res.json();
        const errorArray = errorData.errors;
        console.log(errorData);
      }
    };
    getData();
  }, []);

  const renderRow = (month, days, key) => {
    return (
      <View style={styles.tableRow} key={key}>
        <View style={styles.column}>
          <Text style={styles.columnText}>{month}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnText}>{days}</Text>
        </View>
      </View>
    );
  };

  return (
    <View >
      <Text style={globalStyles.pageHeader}>Overview </Text>
      
      <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        <View style={styles.column}>
             <Text style={styles.headerText}>Month</Text>
        </View>
        <View style={styles.column}>
            <Text style={styles.headerText}>Day Taken</Text>
        </View>
      </View>
      </View>
 
        <View style={styles.tableContainer}>
          {monthData.map((data) => {
            return renderRow(data.month, data.days, data.key);
          })}
        </View>
    </View>
  );
}
const styles = StyleSheet.create ({
    tableContainer : {
         marginLeft:20
    },
    tableRow : {
        flexDirection:'row',
        borderWidth:1,
        borderColor:'grey'
    },
    column : {
        width:'50%'
    },
    columnText : {
        padding:10,
        borderRightWidth:1,
        borderRightColor:'grey'
    },
    headerText : {
        padding:10,
        borderRightWidth:1,
        borderRightColor:'grey',
        fontWeight:'bold'
    },
  

})
