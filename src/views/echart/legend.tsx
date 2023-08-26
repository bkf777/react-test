import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components';

type LegendProps= {
    items:any[],
    showLetters?:boolean
}

export const Legend = (props: LegendProps) => {
    const { items,showLetters=false } = props
    const [showText,setShowText] = React.useState("");
    const [show,setShow] = React.useState(showLetters);
    const onMouseEnter = (event:any)=>{
        setShowText(event.target.dataset.name);
    }
    const onClick = ()=>{
        setShow(!show);
    }
    return (
        <><LegendItems>
            {items.map((item: any) => {
                return (<Row>
                    <Col
                        onMouseEnter={onMouseEnter}  
                        onClick={onClick}
                        data-name={item.name} span={8} 
                        style={{
                            background: `${item.color}`,
                            margin:"10px",color:"white",
                            fontWeight:"700",height:"20px" }}>
                            {showText==item.name&&!show&&item.name}
                            {show&&item.name}
                    </Col>
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