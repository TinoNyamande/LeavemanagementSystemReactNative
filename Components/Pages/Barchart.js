import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function Barchart (props) {
    const screenWidth = Dimensions.get("window").width;
    const chatConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        fillShadowGradientOpacity:1,
        color:(opacity =1) =>`blue`,
        labelColor:(opacity=1) =>`#333`,
        strokeWidth :2,
        barPercentage:0.5,
        useShadowColorFromDataset:false,
        decimalPlaces:0,
    };
    
    const barData = {
        labels: props.labels,
        datasets : [{
            data:props.data,
            colors : [
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                (opacity =1) =>'green',
                
            ]
        }]
    }
    return (
        <BarChart
         data={barData}
         width={screenWidth}
         height={220}
         chartConfig={chatConfig}
         showBarTops={false}
          />
    )
}