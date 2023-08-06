import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components';


export const Legend = (props: any) => {
    console.log(props)
    const testLegend = props.items;

    return (
        <><LegendItems>
            {testLegend.map((item: any) => {
                return (<Row>
                    <Col span={8} style={{ background: `${item.color}`,margin:"10px",color:"white",fontWeight:"700" }}>{item.name}</Col>
                </Row>)
            })}
            </LegendItems>
        </>
    )
}
const LegendItems = styled.div`
display: flex;
justify-content: end;
flex-direction: column;
text-align: center;
`