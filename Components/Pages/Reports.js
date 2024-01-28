import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect,useState } from "react";
import { globalStyles } from "../Styles/GlobalStylesheet";
export default function  () {

    const [data,setData] = useState([])

    
     useEffect(()=>{
        const getData = async () => {
            const name = "tinotenda.nyamande@students.uz.ac.zw";
            const res = await fetch(
              `https://localhost:7111/LeaveApplication/GetAllApplications`,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
            if (res.ok) {
              const data = await res.json();
              setData(data)
           

            } else {
            }
          };
          getData();
        }, []);

        const renderRow = (applicationDate, daysAppliedFor, id,username,leaveType) => {
            return (
              <View style={styles.tableRow} key={id}>
              <View style={styles.column}>
                  <Text style={styles.columnText}>{username}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.columnText}>{applicationDate}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.columnText}>{daysAppliedFor}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.columnText}>{leaveType}</Text>
                </View>
                
              </View>
            );
          };
      
     

    return (
        <View>
            <Text style={globalStyles.pageHeader}>Reports</Text>
            <View>
                <Pressable>
                    <Text>Filter</Text>
                </Pressable>
            </View>

            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <View style={styles.column}>
                        <Text style={styles.headerText}>Applicant</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.headerText}>Application Date</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.headerText}>Leave Type</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.headerText}>Total Days</Text>
                    </View>
                
                </View>
                <View>
                    {data.map((item)=>{
                         return renderRow(item.applicationDate,item.daysAppliedFor,item.id,item.username,item.leaveType)
                    })}
                </View>
            </View>
        </View>
    )
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
       width:'25%'
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