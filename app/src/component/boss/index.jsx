import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chartuser'
import UserCard from '../userCard/index'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends React.Component {

    componentDidMount() {
        this.props.getUserList('genius')
    }

    render() {
        return <UserCard userlist={this.props.userlist}/>
    }
}

export default Boss