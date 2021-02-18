import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../components/NavMenu';
import {RightBar} from "./RightBar";

export class Layout extends Component {
    static displayName = Layout.name;

    render () {
        return (
            <div>
                <NavMenu />
                <RightBar/>
                    <Container>
                        {this.props.children}
                    </Container>              
            </div>
        );
    }
}
