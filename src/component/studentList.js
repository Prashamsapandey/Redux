import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {select, apple} from './studentAction';

class studentList extends Component{
    render(){
        return(
            <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        this.props.list.map(a  => {
                            return <tr key ={a.id}>
                                    <td onClick={()=> this.props.handleClick(a)}>{a.id}</td>
                                    <td>{a.name}</td>
                                </tr>
                            
                        })
                    }
                </tbody>
            </table>
            <h1>selected: {this.props.selected.name}</h1>
            </div>
        )
    }
    
}

function mapStateToProps(store){
    return{
        list: store.students,
        selected: store.selected
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        handleClick: select
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(studentList);