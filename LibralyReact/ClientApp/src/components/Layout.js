import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {RightBar} from "./RightBar";


export class Layout extends Component {
    static displayName = Layout.name;

    render () {
        return (
            <div>
                <NavMenu />
                <RightBar/>

                    <Container >
                        <div className="child-props">
                        {this.props.children}
                        </div>
                    </Container>              
            </div>
        );
    }
}
