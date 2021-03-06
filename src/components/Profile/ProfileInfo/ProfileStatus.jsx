import React from 'react';
import s from './ProfileInfo.module.css';





class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }
    

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } );
        this.props.updateStatus(this.state.status);
    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
        
    }



    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;