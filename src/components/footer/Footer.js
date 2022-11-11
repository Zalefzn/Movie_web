import React, {Component} from 'react';
import './Footerstyle.css';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            titleP: "~@WELCOME 2022, COPYRIGHT~",
        }
    }

    render(){
        return(
            <div className='footer-header'>
                <div className="footer">
                    <p>{this.state.titleP}</p>
                </div>
            </div>
        );
    }
}

export default Footer;