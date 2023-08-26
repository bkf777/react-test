import React from 'react'
import Calendar from "../calendar"
import { Card } from 'antd'

export default function page2() {
    return (
        <>
        <Card style={{height:"100%"}}>
            <Calendar style={{height:"100%" , overflow:"hidden"}} />
        </Card>
        </>
    )
}
