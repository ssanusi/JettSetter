import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { filterUnpackedItems } from '../store/Actions/filterActions';

const mapStateToProps = ({ filter }) => {
    return {
        value : filter.unpackedItemsFilter
    }
};

const mapDispatchToProps = dispatch => ({
    updateFilter(value){
        dispatch(filterUnpackedItems(value))
    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)