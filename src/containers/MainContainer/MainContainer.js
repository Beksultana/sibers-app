import React, {Component, Fragment} from 'react';
import {fetchContact} from "../../store/actions/contactSyncActions";
import {connect} from "react-redux";
import './MainContainer.css';
import {Button, Card, CardBody, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class MainContainer extends Component {

    state = {
        selectedContact: null
    };

    componentDidMount() {
        this.props.fetchContacts()
    }

    showModal = contact => {
        this.setState({selectedContact: contact});
    };

    hideModal = () => {
        this.setState({selectedContact: null});
    };

    EditHandler = (id ,event) => {
        event.preventDefault();
        this.props.history.push(`/edit/${id}`)
    };

    render() {
        const contacts = this.props.contacts ? this.props.contacts.map((contact) => {
            return (
                <div onClick={() => this.showModal(contact)} key={contact.id}>
                    <Card className=" ContactItemBlock">
                        <CardBody className="ContactItemBlockInfo">
                            <div><img src={contact.avatar} alt=""/></div>
                            <div>
                                <CardTitle>{contact.name}</CardTitle>
                                <CardTitle>{contact.username}</CardTitle>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )
        }): null;

        return (
            <Fragment>
                <div>
                    <h2 style={{margin: "10px 0", textAlign: 'center', fontWeight: "bold"}}>Contacts</h2>
                </div>
                <div className="Contacts">
                    {contacts}
                </div>

                <Modal isOpen={!!this.state.selectedContact} toggle={this.hideModal}>
                    {this.state.selectedContact && (
                        <Fragment>
                            <ModalHeader toggle={this.hideModal}>{this.state.selectedContact.name}</ModalHeader>
                            <ModalBody >
                                <div className="modalBody">
                                    <div>
                                        <img className="Contact-avatar"
                                             src={this.state.selectedContact.avatar} alt="avatar"/>
                                    </div>
                                    <div className="info">
                                        <p>User name: <strong>{this.state.selectedContact.username}</strong></p>
                                        <p>Phone: <strong>{this.state.selectedContact.phone}</strong></p>
                                        <div>Email: <a href="/"> {this.state.selectedContact.email}</a></div>
                                        <div>Website: <a href="/"> {this.state.selectedContact.website}</a></div>
                                        <div style={{marginTop: '10px'}}>
                                            <h4 style={{fontWeight: 'bold'}}>Address</h4>
                                            <div>
                                                <p>Country: <strong>{this.state.selectedContact.address.country}</strong></p>
                                                <p>City: <strong>{this.state.selectedContact.address.city}</strong></p>
                                                <p>State: <strong>{this.state.selectedContact.address.state}</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary"
                                        onClick={this.EditHandler.bind(this, this.state.selectedContact.id)}
                                >Edit</Button>{' '}
                                <Button color="danger" onClick={this.hideModal}>Cancel</Button>
                            </ModalFooter>
                        </Fragment>
                    )}
                </Modal>
            </Fragment>
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