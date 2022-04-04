import { updateRequests } from "../../components/counter/counterSlice";

export const authFunc = (dispatch) => {
  const xhttp = new XMLHttpRequest();
  console.log("authfunc")
  // if (values.password !== "") {
  xhttp.open('POST', 'http://mincasa.khademsam.com/API/v1/admin/', true);
  let creds = { 'username': 'admin', 'password': 'abcd1234' };
  xhttp.setRequestHeader('Content-type', 'application/JSON');
  xhttp.send(JSON.stringify(creds));
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log('before if' + xhttp.readyState);
      console.log(this.response)
      const responseJSON = JSON.parse(this.responseText);
      console.log(responseJSON)
      dispatch(updateRequests(responseJSON));
    }
  };
};