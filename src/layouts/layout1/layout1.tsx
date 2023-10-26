import React, { Component, ReactNode } from "react";
import Header from "../../components/Header/Header";

interface Layout1Props {
    children: ReactNode;
}

class Layout1 extends Component<Layout1Props> {
    render() {
        return (
            <div className="main">
                <Header />
                <div className='container px-3 mx-auto'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout1;
