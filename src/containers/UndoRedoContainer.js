import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { undoItemAction, redoItemAction } from '../store/Actions/itemsActions';


const mapDispatchToProps = dispatch => bindActionCreators({
    undo:undoItemAction,
    redo:redoItemAction
}, dispatch)
export default connect(null, mapDispatchToProps)(({ undo, redo }) => (
    <div style={{
        margin: "1em 0"
    }}>
       <button onClick={undo}>undo</button>
       <button onClick={redo}>redo</button>
    </div>
))