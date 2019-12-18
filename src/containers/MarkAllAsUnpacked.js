import React from 'react'

import { connect } from "react-redux";
import { markAllAsUnpacked } from "../store/Actions/itemsActions";
import { bindActionCreators } from 'redux';


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({markAllAsUnpacked }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(({ markAllAsUnpacked }) => {
  return (
    <button className="button full-width" onClick={markAllAsUnpacked}>
      Mark All As Unpacked
    </button>
  );
});
