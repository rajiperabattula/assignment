import React,{Component} from 'react';
import screen from '../screen.svg';

class Banner extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className='bannerSection'>
            <h2>{this.props.heading}</h2>
            <p className='dsk_content'>{this.props.content}</p>
            <span className='mbl_content'>{this.props.mbl_cnt}</span>
            <button className='try-button'>Try for free</button>
            <div className='screen-img'><img src={screen} alt='screen' className='screen'/></div>
        </div>
    )
    }
}

export default Banner