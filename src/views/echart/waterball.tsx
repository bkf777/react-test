import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


const LiquidChart = () => {
    const chartRef = useRef(null);
    const gradientColors: string[] = []; // 定义一个空数组用于存储渐变颜色

    // 使用循环生成100种颜色
    for (let i = 0; i <= 100; i++) {
        // 计算当前百分比对应的颜色值
        const red = Math.floor((255 * (100 - i)) / 100);
        const green = Math.floor((255 * i) / 100);
        const blue = 0; // 固定蓝色为0

        // 将颜色值添加到渐变颜色数组
        gradientColors.push(`rgb(${red}, ${green}, ${blue})`);
    }
    
    const colorHandler =(value:number)=>{
        const percent = value ;
        // 根据百分比获取对应的颜色
        const colorIndex = Math.floor(percent);
        const color = gradientColors[colorIndex];

        return color;
    }
    useEffect(() => {
        // 创建ECharts实例
        const chartInstance = echarts.init(chartRef.current);

        // 准备数据
        const value = 100;

        // 配置水球图选项
        const option = {
            series: [
                {
                    type: 'liquidFill',
                    data: [value / 100],
                    itemStyle: {
                        color:colorHandler(value)
                    },
                    label:{
                        normal:{
                            textStyle:{
                                fontSize:28
                            }
                        }
                    },
                }
            ],
        };

        // 渲染图表
        chartInstance.setOption(option);

        // 当组件销毁时销毁ECharts实例
        return () => {
            chartInstance.dispose();
        };
    }, []);

    return <div ref={chartRef} style={{ width: '100%', height: '200px',fontSize:"14px"}} />;
};

export default LiquidChart;
