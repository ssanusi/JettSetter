
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { filterPackedItems } from '../store/Actions/filterActions';

const mapStateToProps = ({ filter }) => {
    return {
        value : filter.packedItemsFilter
    }
};

const mapDispatchToProps = dispatch => ({
    updateFilter(value){
        dispatch(filterPackedItems(value))
    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)