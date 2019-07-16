import React,{Component} from 'react'
import {Card} from 'antd'
import './index.less'
const {Meta}=Card;
class Content extends Component{
    render(){
        return (
            <div>
                <Card
                size='small'
                hoverable
                style={{ width: 180 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        )
    }
}
export default Content