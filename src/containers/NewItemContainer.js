import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';
import { addItem } from '../store/Actions/itemsActions';
import { updateNewItemValue } from '../store/Actions/newItemAction';


const mapStateToProps = ({ newItemValue }) => ({ value : newItemValue})
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
      addItem,
      updateNewItemValue
    }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(NewItem)