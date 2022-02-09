import React,{Component} from 'react';
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

class MobileHeader extends Component{
    constructor(props){
        super(props)
        this.state={
                sideDrawerOpen: false
        }
        this.drawerToggleClickHandler=this.drawerToggleClickHandler.bind(this);
        this.backDropClickHandler=this.backDropClickHandler.bind(this);
    }
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
      };
      backDropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
      };

    render(){
        let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
    }
}

export default MobileHeader

