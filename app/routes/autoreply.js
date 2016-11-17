import {list, create} from '../controllers/autoreplyController';

var routes = [
	{url: '/autoreply', method: 'get', handler: list},
	{url: '/saveautoreply', method: 'get', handler: create}
];

export {routes};