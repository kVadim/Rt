import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

function ProjectDetails(props) {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signIn' />
  if ( project ) {
    return (
    <div className="container section project-details">
      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">Project Title - {project.title}</span>
              <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted By {project.authorFristName}  {project.authorLastName}</div>
              <div>{project.date}</div>
          </div>
      </div>
    </div>
    )
  } else {
    return(
    <div className="container center">
      <p> Loading ...</p>
    </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  return {
      project: projects ? projects[id] : null,
      auth: state.firebase.auth
  }
}

export default compose( 
  connect(mapStateToProps), 
  firestoreConnect([
      {collection: 'projects'}
  ])
)(ProjectDetails);
