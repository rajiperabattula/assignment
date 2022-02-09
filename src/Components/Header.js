import React,{Component} from 'react';
import logo from '../logo.svg';
import MobileHeader from './MobileHeader';


class Header extends Component{
    render(){
    return (
        <header>
        <div  className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='header-nav_items'>
                <span>Home</span>
                <span>Product</span>
                <span>Pricing</span>
                <span>Contact</span>
                <div className='inp-and-button'>
                    <form>
                        <input type='email' placeholder="Your Email" className='email'></input>
                        <button>
                            <input type='submit' value="Subscribe"></input>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className='mobile_appHeader'>
        <MobileHeader />
        </div>
      </header>
    )
    }
}

export default Header