import React, { Component } from 'react'

import './styles.scss'

export class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <div className="bg">
          <div />
          <div>
            <div>请扫描货架上的二维码</div>
          </div>
        </div>
        <div className="scan">
          <div className="ring0">
            <div className="ring1">
              <div className="ring2" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <div>我的订单</div>
          </div>
          <div>
            <div>意见反馈</div>
          </div>
        </div>
      </div>
    )
  }
}
