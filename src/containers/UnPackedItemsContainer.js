import { connect } from "react-redux";
import Items from "../components/Items";
import { toggleItem, removeItem } from "../store/Actions/itemsActions";

const mapStateToProps = ({ items, filter }) => {
  return {
    items: items.filter(
      item => !item.packed && item.value.includes(filter.unpackedItemsFilter)
    )
  };
};

const mapDispatchToProps = dispatch => ({
  onCheckOff(item) {
    dispatch(toggleItem(item));
  },
  onRemove(id) {
    dispatch(removeItem(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);