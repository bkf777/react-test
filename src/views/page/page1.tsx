import React from 'react'
import WaterBall from "../echart/waterball"
import { Card, Col, Row } from 'antd'
import { Legend } from '../echart/legend'
import Statistic from '../echart/statistic'
import FirstTable from '../echart/firstTable'

export default function page1() {
    const testLegend = [
        {
            color: "#FF0000",
            name: "红色"
        },
        {
            color: "#00FF00",
            name: "绿色"
        },
        {
            color: "#0000FF",
            name: "蓝色"
        }
    ];

    return (
        <Row >
            <Col span={8}>
                <Row gutter={[16,24]} >
                    <Col span={24}>
                        <Card title="车位总览">
                            <Row>
                                <Col span={8}>
                                    <Legend items={testLegend} />
                                </Col>
                                <Col span={16} >
                                    <WaterBall />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Statistic />
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={15} offset={1}  >
                <Card title={123} style={{height:"100%"}}>
                    <FirstTable />
                </Card>
            </Col>
        </Row>
    )
}
