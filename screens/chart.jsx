import React from 'react';
import {View, StyleSheet} from 'react-native';
import { LineChart } from 'react-native-wagmi-charts';
const Chart = () => {
    const data =[
        {
            'timestamp':12,
            'value':12
        },
        {
            'timestamp':13,
            'value':13
        },
        {
            'timestamp':14,
            'value':15
        },
        {
            'timestamp':16,
            'value':14
        },
    ]   
    return (
        <View>
            <LineChart.Provider data={data}>
      <LineChart>
        <LineChart.Path />
        <LineChart.CursorCrosshair />
      </LineChart>
    </LineChart.Provider>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chart;
