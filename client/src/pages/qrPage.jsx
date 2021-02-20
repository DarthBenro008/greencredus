import React, { Component } from "react";
import QrReader from "react-qr-scanner";

// https://www.npmjs.com/package/react-qr-scanner

class Qr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 100,
            result: "No result",
        };

        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(data) {
        this.setState({
            result: data,
        });
    }

    // eslint-disable-next-line class-methods-use-this
    handleError(err) {
        console.error(err);
    }

    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        };
        const { delay, result } = this.state;
        return (
            <div>
                <QrReader
                    delay={delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <p>{result}</p>
            </div>
        );
    }
}

export default Qr;
