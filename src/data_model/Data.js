import Log from '../util/Log';

export default class Data {
  data = '';
  getData = () => {
    Log.out('get data = ' + this.data);
    return this.data;
  }

  setData = (myData) => {
    this.data = myData;
    Log.out('set data = ' + this.data);
  };
}
