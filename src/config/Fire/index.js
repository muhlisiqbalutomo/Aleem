import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCCKcM4PTh-IOx3TjDtVkeCuOZuWPliyJo',
  authDomain: 'aleem-4f148.firebaseapp.com',
  projectId: 'aleem-4f148',
  storageBucket: 'aleem-4f148.appspot.com',
  messagingSenderId: '1048160843474',
  appId: '1:1048160843474:web:8ec28422ac8cc73abf1f0b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Fire = firebase;

export default Fire;
