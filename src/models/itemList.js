import { observable, action, computed } from 'mobx';
import Item from './item';


export default class itemList {
    @observable items = [];
    @observable packedItemFilter = '';
    @observable unpackedItemFilter = '';

    @computed get packedItems(){
        return this.items.filter(item => item.packed);
    }

    @computed get filteredPackedList(){
        return this.packedItems.filter(item => item.value.includes(this.packedItemFilter));
    }

    @computed get filteredUnpackedList(){
        return this.unpackedItems.filter(item => item.value.includes(this.unpackedItemFilter));
    }

    @computed get unpackedItems(){
        return this.items.filter(item => item.unpacked)
    }

    @action.bound addItem(item){
        this.items.push( new Item(item, this))
    }

    @action.bound removeItem(itemToRemove){
        this.items = this.items.filter(item => item !== itemToRemove)
    }

    @action.bound updatePackedItemFilter(value){
      this.packedItemFilter = value
    }

    @action.bound updateUnpackedItemFilter(value){
      this.unpackedItemFilter = value
    }

    @action.bound markedAllAsUnpacked(){
        this.items = this.items.map(item => { item.packed = false; return item })
    }
}
