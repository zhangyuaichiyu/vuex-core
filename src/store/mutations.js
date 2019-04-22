const ADD_ITEMNUM = 'ADD_ITEMNUM'
export default {
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.choosedNum += num;
  }
}