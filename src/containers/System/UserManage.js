import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserManage extends Component {

   constructor(props) {
      super(props);
      this.state = {

      }
   }

    componentDidMount() {

    }

    /** Life cycle
     * Run companent :
     * 1. Run constructor -> init state
     * 2. Did mount (set state)
     * 3. Render
     * 
     */
    render() {
        return (
            <div className="users-container">
                <div className="title text-center">Manage user's with Doan Nguyen </div>
            </div>
            
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
