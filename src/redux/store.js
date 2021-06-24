import {createStore} from 'redux';

// const [profile, setProfile] = useState("iqbal");
// setProfile('Utomo');
const initialState = {
  loading: false,
};
const reducer = (state = initialState, action) => {
  return state;
};
const store = createStore(reducer);

export default store;
