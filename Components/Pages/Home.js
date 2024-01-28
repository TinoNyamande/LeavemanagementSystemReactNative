import { Text } from "react-native";
import React from "react";

export default function Home () {
    const [data,setData] = React.useState([])
    React.useEffect(()=>{
        const getData = async () =>{
            const name = "tinotenda.nyamande@students.uz.ac.zw"
            const res = await fetch(`https://localhost:7111/LeaveApplication/GetDaysPerMonth?Username=${name}`, {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
            
              });
              if (res.ok) {
                const data = await res.json(); // Assuming the server returns JSON
                console.log(data);
              } else {
                let errors = "";
                const errorData = await res.json();
                const errorArray = errorData.errors;
                }
        }
        getData();

    },[])
    return (
        <Text>Home page</Text>
    )
}