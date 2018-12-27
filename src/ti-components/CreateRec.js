import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateRec extends Component {
state =  {
    title: '',
    content: ''
}

chunks = [];
options = {mimeType: 'audio/webm'};
// stream = navigator.mediaDevices.getUserMedia({ audio:true, video:false });
// mediaRecorder = new MediaRecorder(this.stream, this.options);


handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
 }
handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createProject(this.state);
    this.props.history.push('/');
}

componentDidMount() {
    navigator.mediaDevices.getUserMedia({ audio:true, video:false },
        (stream) => {
            console.warn('huuraaay')
            this.mediaRecorder = new MediaRecorder(stream, this.options);
            this.mediaRecorder.ondataavailable = handleDataAvailable;
            console.log('this.mediaRecorder', this.mediaRecorder)

          },
          error); 

    function handleDataAvailable(event) {
        if (event.data.size > 0) {
            console.log(event.data)
            this.chunks.push(event.data);
        } else {
            // ...
        }
    }


    function error(error) {console.warn(error)}

}

start(e) {
    e.preventDefault();
    console.log('start', this.mediaRecorder);

}

render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signIn' />
    return (
        <div className="container">
            <form className="white" onSubmit={this.start}>
                <h5 className="grey-text text-darken-3">Create new Rec</h5>
                {/* <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div> */}
                {/* <div className="input-field">
                    <label htmlFor="content">Project content</label>
                    <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                </div> */}
                <div className="input-field">
                    <button className="btn-floating pink lighten-1 z-depth-0">Rec</button>
                </div>
            </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    //   createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRec)
