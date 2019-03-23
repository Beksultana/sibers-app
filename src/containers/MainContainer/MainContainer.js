import React, {Component} from 'react';
import {fetchContact} from "../../store/actions/contactSyncActions";
import {connect} from "react-redux";

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
        console.log(this.props.contacts);
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(fetchContact())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);