import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "ตัวอย่างแผนผังรายงานการฉีดวัคซีนจังหวัดภูเก็ต-แยกตำบล"
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
					fontSize: 16,
					itemclick: this.toggleDataSeries
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "stackedColumn100",
				name: "ฉีด 1 เข็ม",
				showInLegend: true,
				color: "#3300FF",
				dataPoints: [
					{ label: "ไม้ขาว", y: 789},
					{ label: "เทพกระษัตรี", y: 355},
					{ label: "เชิงทะเล", y: 303},
					{ label: "เกาะแก้ว", y: 310},
					{ label: "สาคู",	y: 283},
					{ label: "ศรีสุนทร", y: 236},
					{ label: "วิชิต", y: 233},
					{ label: "ราไวย์", y: 174},
					{ label: "รัษฎา", y: 187},
					{ label: "ป่าตอง", y: 162},
					{ label: "ป่าคลอก", y: 789},
					{ label: "ตลาดใหญ่", y: 355},
					{ label: "ตลาดเหนือ", y: 303},
					{ label: "ฉลอง", y: 310},
					{ label: "กะรน",	y: 283},
					{ label: "กะทู้", y: 236},
					{ label: "กมลา", y: 233}
				]
			},
			{
				type: "stackedColumn100",
				name: "ฉีด 1 เข็ม",
				showInLegend: true,
				color: "#C0C0C0",
				dataPoints: [
					{ label: "ไม้ขาว", y: 789},
					{ label: "เทพกระษัตรี", y: 355},
					{ label: "เชิงทะเล", y: 303},
					{ label: "เกาะแก้ว", y: 310},
					{ label: "สาคู",	y: 283},
					{ label: "ศรีสุนทร", y: 236},
					{ label: "วิชิต", y: 233},
					{ label: "ราไวย์", y: 174},
					{ label: "รัษฎา", y: 187},
					{ label: "ป่าตอง", y: 162},
					{ label: "ป่าคลอก", y: 789},
					{ label: "ตลาดใหญ่", y: 355},
					{ label: "ตลาดเหนือ", y: 303},
					{ label: "ฉลอง", y: 310},
					{ label: "กะรน",	y: 283},
					{ label: "กะทู้", y: 236},
					{ label: "กมลา", y: 233}
				]
			},
			{
				type: "stackedColumn100",
				name: "Bronze",
				showInLegend: true,
				color: "#CD7F32",
				dataPoints: [
					{ label: "ไม้ขาว", y: 789},
					{ label: "เทพกระษัตรี", y: 355},
					{ label: "เชิงทะเล", y: 303},
					{ label: "เกาะแก้ว", y: 310},
					{ label: "สาคู",	y: 283},
					{ label: "ศรีสุนทร", y: 236},
					{ label: "วิชิต", y: 233},
					{ label: "ราไวย์", y: 174},
					{ label: "รัษฎา", y: 187},
					{ label: "ป่าตอง", y: 162},
					{ label: "ป่าคลอก", y: 789},
					{ label: "ตลาดใหญ่", y: 355},
					{ label: "ตลาดเหนือ", y: 303},
					{ label: "ฉลอง", y: 310},
					{ label: "กะรน",	y: 283},
					{ label: "กะทู้", y: 236},
					{ label: "กมลา", y: 233}

				]
			},
			{
				type: "stackedColumn100",
				name: "Bronze",
				showInLegend: true,
				color: "#33CC00",
				dataPoints: [
					{ label: "ไม้ขาว", y: 78},
					{ label: "เทพกระษัตรี", y: 355},
					{ label: "เชิงทะเล", y: 303},
					{ label: "เกาะแก้ว", y: 310},
					{ label: "สาคู",	y: 283},
					{ label: "ศรีสุนทร", y: 236},
					{ label: "วิชิต", y: 233},
					{ label: "ราไวย์", y: 174},
					{ label: "รัษฎา", y: 187},
					{ label: "ป่าตอง", y: 162},
					{ label: "ป่าคลอก", y: 789},
					{ label: "ตลาดใหญ่", y: 355},
					{ label: "ตลาดเหนือ", y: 303},
					{ label: "ฉลอง", y: 310},
					{ label: "กะรน",	y: 283},
					{ label: "กะทู้", y: 236},
					{ label: "กมลา", y: 233}

				]
			}
			]
		}
		
		return (
		<div>
			<h1>React Stacked Column 100% Chart</h1>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;