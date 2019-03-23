import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class Edit extends Component {
    render() {
        return <Fragment>
            <h2 style={{margin: "20px 0", textAlign: 'center', fontWeight: "bold"}}>Edit</h2>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input type="text" name="email" id="Name" placeholder="Enter a name"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="userName">User name</Label>
                            <Input type="text" name="userName" id="userName"
                                   placeholder="Enter a user name"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"
                               placeholder="Enter a email"/>
                    </FormGroup>
                </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="number" name="phone" id="phone"
                               placeholder="Enter a number"/>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="text" name="state" id="state"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Button>Sign in</Button>
            </Form>
        </Fragment>;
    }
}

export default Edit;