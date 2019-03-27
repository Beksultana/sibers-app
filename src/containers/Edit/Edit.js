import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {connect} from "react-redux";
import './Edit.css';
import {saveContact} from "../../store/actions/contactSyncActions";

class Edit extends Component {

    state = {
        contact: {
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
            country: '',
            city: '',
            state: '',
            image: ''
        },
        id: null
    }; // object where to save changed data

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchIDcon(id)
    } // return id objects

    saveItemHandler = (event) => {
        event.preventDefault();
        const contacts = this.props.contacts;
        contacts[this.state.id] = this.state.contact;
        this.props.saveContact(contacts);
        this.props.history.push('/');
    }; // saving changed data

    onChangeHandler = (event) => {
        const contact = {...this.state.contact};
        contact[event.target.name] = [event.target.value];
        this.setState({contact})
    }; // so that you can write in input

    fetchIDcon = id => {
        const contactItem = this.props.contacts.filter(item => item.id === parseInt(id))[0];
            this.setState({
                contact: {
                    name: contactItem.name,
                    username: contactItem.username,
                    email: contactItem.email,
                    phone: contactItem.phone,
                    website: contactItem.website,
                    country: contactItem.address.country,
                    city: contactItem.address.city,
                    state: contactItem.address.state,
                    image: contactItem.avatar
                },
              id: id
            });
    }; // I show contact information in input



    render() {

        return <Fragment>
            <h2 style={{margin: "20px 0", textAlign: 'center', fontWeight: "bold"}}>Edit</h2>
            <div>
                <img style={{width: "150px", height: "150px", margin: '10px'}} src={this.state.contact.image} alt=""/>
            </div>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input value={this.state.contact.name} onChange={this.onChangeHandler}
                                   type="text" name="name" id="Name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="userName">User name</Label>
                            <Input value={this.state.contact.username}  onChange={this.onChangeHandler}
                                type="text" name="username" id="userName" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input value={this.state.contact.email} onChange={this.onChangeHandler}
                               type="email" name="email" id="email"/>
                    </FormGroup>
                </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input
                            value={this.state.contact.phone} onChange={this.onChangeHandler}
                            type="text" name="phone" id="phone" />
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input value={this.state.contact.country} onChange={this.onChangeHandler}
                                   type="text" name="country" id="country"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input value={this.state.contact.city} onChange={this.onChangeHandler}
                                   type="text" name="city" id="city"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input value={this.state.contact.state} onChange={this.onChangeHandler}
                                   type="text" name="state" id="state"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="website">Web Site</Label>
                            <Input value={this.state.contact.website} onChange={this.onChangeHandler}
                                   type="text" name="website" id="website"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="EditBtn" onClick={this.saveItemHandler}>Save</Button>
            </Form>
        </Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
}; // returning an array of contacts from reducer (map state to props)

const mapDispatchToProps = dispatch => {
    return {
        saveContact: (contacts) => dispatch(saveContact(contacts))
    }
}; // Map dispatch to props

export default connect(mapStateToProps, mapDispatchToProps)(Edit);