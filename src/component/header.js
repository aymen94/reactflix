import React,{Component} from 'react';
import Modal from 'react-modal';
import '../style/style.css';

class Header extends Component {
  constructor(){
      super();
      this.state={
          info:false
      }
      this.openModal=this.openModal.bind(this);
      this.closeModal=this.closeModal.bind(this);
  }

  openModal() {
    this.setState({info: true});
}

closeModal() {
    this.setState({info: false});
}
    infoModal(){
        return(
        <Modal isOpen={this.state.info} 
          onRequestClose={this.closeModal} 
          className="infoModal"
          overlayClassName="modalOverlay"
          contentLabel="Modal"
        >
           <div className="modalTitle">
           Info
           </div>
           <br/>
           <div className="modalBody" style={{textAlign:'justify'}}>
            Reactflix is simple demo Inspired by Netflix.
            <br/>
            Api by: themoviedb.org
            <br/>
            for repo:<a href="https://github.com/aymen94/ReactFlix">Reactflix</a>
            <br/>
            Created By: <a href="https://aymen94.github.io/">Aymen Naghmouchi</a>
           </div>
        </Modal>);
    }
    
    render(){
            return(
                <div className="page-head">
                    {this.props.title}
                <div className="info btn">
                    <a onClick={this.openModal}>info</a>
                    {this.infoModal()}
                </div>
                </div>

            );
}
}
export default Header;