import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyD0y_yiEyfbRxp7FLVubVx2Jtl_5ZBkM8c",
  authDomain: "seedfood-84172.firebaseapp.com",
  databaseURL: "https://seedfood-84172.firebaseio.com",
};

export const firebaseRef = firebase.initializeApp(config);
