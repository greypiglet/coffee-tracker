import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class Edit extends Component {

  // initialize our state
    state = {
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null,
    };

    // our delete method that uses our backend api
    // to remove existing database information
    deleteFromDB = idTodelete => {
      let objIdToDelete = null;
      this.props.data.forEach(dat => {
        if (dat.id == idTodelete) {
          objIdToDelete = dat._id;
        }
      });

      axios.delete("/api/deleteData", {
        data: {
          id: objIdToDelete
        }
      });
    };


    // our update method that uses our backend api
    // to overwrite existing data base information
    updateDB = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.props.data.forEach(dat => {
        if (dat.id == idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });

      axios.post("/api/updateData", {
        id: objIdToUpdate,
        update: { message: updateToApply }
      });
    };

  render() {
    return (

      <div className="outputBoxEdit">

        <div className="deleting">
            <div className="smallPadding">
              <h4>Id of item to delete</h4>
                <input
                  type="text"
                  onChange={e => this.setState({ idToDelete: e.target.value })}
                />
            </div>

            <div className = "smallPadding">
              <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                <h4>DELETE</h4>
              </button>
            </div>
        </div>

        <div className="editing">
            <div className="smallPadding">
              <h4>Id of item to update</h4>
                <input
                  type="text"
                  onChange={e => this.setState({ idToUpdate: e.target.value })}
                />
              <h4>New message</h4>
                <input
                  type="text"
                  onChange={e => this.setState({ updateToApply: e.target.value })}
                />
            </div>

            <div className="smallPadding">
              <button
                onClick={() =>
                  this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                }
              >
                <h4>UPDATE</h4>
              </button>
            </div>
        </div>

      </div>
    )
  }

}

export default Edit;
