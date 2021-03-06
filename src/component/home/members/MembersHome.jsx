import React, { Component } from 'react'
import MembersItem from './MembersItem/MembersItem'
import HomeNav from '../homeContent/homeNav/homeNav'
import HomeNavContent from '../homeContent/homeNavContent/homeNavContent'
import './MembersHome.scss'
import { members, } from '../../../redux/actions'
import { connect } from 'react-redux'

class MembersHome extends Component {
  componentWillMount () {
    let itemListShow = this.props.membersStart
    console.log(itemListShow)
    if (itemListShow === 'first') {
      this.props.members()
    }
  }

  render () {

    const info = this.props.getMembers
    return (
      <div>
        <HomeNav/>
        <HomeNavContent/>
        <div className={'outerFrame'}>
          <div>
            <MembersItem info={info}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getMembers: state.getMembers,
  membersStart: state.membersStart
})
export default connect(mapStateToProps, {
  members
})(MembersHome)