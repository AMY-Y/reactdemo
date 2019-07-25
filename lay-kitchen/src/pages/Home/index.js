import React,{Component} from 'react'
import {Carousel} from 'antd'
import './index.less'
import Content from '../../components/Content/index'

class Home extends Component{
    render(){
        return (
            <div>
                <Carousel autoplay className='swiper'>
                    <div>
                        <img
                            src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://i3.meishichina.com/attachment/mofang/2019/03/01/20190301155142852315710138013.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://i3.meishichina.com/attachment/mofang/2019/02/21/2019022115507147387858197577.jpg"
                            alt=""
                        />
                    </div>
                </Carousel>
                <Content keyword='春季'></Content>
            </div>
        )
    }
}
export default Home