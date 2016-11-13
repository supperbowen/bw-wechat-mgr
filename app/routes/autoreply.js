import {list} from '../controllers/autoreplyController';

var routes = [
	{url: '/autoreply', method: 'get', handler: list}
];

export {routes};