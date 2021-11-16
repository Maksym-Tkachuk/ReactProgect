
import * as axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { headerAPI } from "../../api/api"
import { setAuthUsersData } from "../../Redux/auth-refucer"
import Header from "./Header"


class HeaderContainer extends React.Component {

    componentDidMount() {

        headerAPI.getUserInformation()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUsersData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header Auth={this.props.Auth} login={this.props.login} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        Auth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, { setAuthUsersData })(HeaderContainer)