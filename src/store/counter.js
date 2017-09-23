import {observable, action} from 'mobx'

class CounterStore {
	@observable counter = 0;

  @action increase(){
    this.counter++
  }
}

export const counterStore = new CounterStore();
