import { ServerLink } from '../config/';

//import Users from './Users';
import Widgets from './Widgets';
//import CRM from './Leads';

export async function LoginUser(UserObject) {
    const res = await fetch(ServerLink + '/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(UserObject),
    })
    .then(d => d.json()
    .then(json => {
        console.log('json: ', json);
        return json;
    }))
    .catch(e => console.log('Network Error: ', e));
    console.log('LoginUser: ', res);
    return res;
}

export async function RegistrationUser(UserObject) {
    fetch(ServerLink + '/user/signin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(UserObject),
    })
    .then(d => d)
    .catch(e => console.log('Network Error: ', e));
}

export default {
    Widgets,
}