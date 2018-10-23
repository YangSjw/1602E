import {getList} from '../services/index';

export default {

  namespace: 'rank',

  state: {
    topList: []
    
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getList({payload}, {call , put}){
      let data = yield call(getList);
      console.log('data...', data.data.data);
      yield put({
        type: 'updateState',
        payload: data.data.data
      })
    }
    
  },

  reducers: {
    updateState(state, action) {
      console.log({ ...state, ...action.payload })
      return { ...state, ...{payload: action.payload }};
    },
  },

};
