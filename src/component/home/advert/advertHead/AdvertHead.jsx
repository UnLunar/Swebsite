import React, { Component } from 'react'
import './AdervertHead.scss'

export default class AdvertHead extends Component {
  render () {
    return (
      <div className="AdvertHead">
        <div className="headBG">
          <div className="AdvertTitle">
            <h2 className={'previous'}>数据科学与技术学院</h2>
            <h2 className={'last'}> 科技创新协会</h2>
            <h3 >宣传部
            <div className={'AdverLlogo'}> </div>
            </h3>
          </div>
        </div>
      </div>
    )
  }
}