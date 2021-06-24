import {createStore} from 'redux';

// const [profile, setProfile] = useState("iqbal");
// setProfile('Utomo');
const initialState = {
  loading: false,
  name: 'Iqbal Utomo',
  address: 'Depok',
};
const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Muhlis Iqbal Utomo',
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
