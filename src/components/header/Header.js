import React, {Component} from 'react';
import './Headstyle.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: "netflix.jpg",
            src2:"Avengers.png",
            link: "Home",
            link2: "Genre",
            link3: "Country",
            link4: "Favorite",
            link5: "Wishlist",
            alertData: 'Happy Movie Days....'
        }
        this.handleAlert = this.handleAlert.bind(this);
    }

    handleAlert(){
       this.setState((props, state) => {
            return {
                alert: alert(props.alertData),
            }
       });
    }

    render(){
        return(
            <div className="header-content">
                <div className="navbar-content">
                    <div className="navbar">
                        <ul>
                            <li><a href ="/">{this.state.link5}</a></li>
                            <li><a href ="/">{this.state.link4}</a></li>
                            <li><a href ="/">{this.state.link3}</a></li>
                            <li><a href ="/">{this.state.link2}</a></li>
                            <li><a href ="/">{this.state.link}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logo-content">
                    <div className="logo">
                        <h1 id="header1">
                            WELMOV
                        </h1>
                    </div>
                </div>
                <div className="image-content">
                    <div className="background">
                        <img src={this.state.src} alt =""></img>,
                    </div>
                </div>
                <div className="movie-pict">
                    <div className="pict">
                        <img src={this.state.src2} alt=""></img>
                    </div>
                </div>
                <div className="text-content">
                    <div className="text">
                        <h1>Welcome</h1>
                    </div>
                    <div className="desc">
                        <p>watch your favorite movies and <br></br>subscribe with us in providing<br></br> the best movies around the world</p>
                    </div>
                </div>
                <div className="button-navigate">
                    <div className="button">
                        <a href="/" class="button" onClick={this.handleAlert}>Watch Now</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;