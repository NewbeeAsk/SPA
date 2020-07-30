import React, {Component} from "react"
import {setStatus} from "../../redux/postsReducer";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            text: this.props.status
            };
    }
    offEditMode = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                    editMode: false,
                    }
            );
            this.props.setStatusThunk(this.state.text);
        }
    }

    onEditMode = () => {
        this.setState({
                editMode: true
            }
        );
    }
    onStatusChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <div>
                        <input value={this.state.status} onChange={this.onStatusChange} onKeyUp={this.offEditMode}></input>

                    </div>
                    :
                    <div>
                        <span onClick={this.onEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;