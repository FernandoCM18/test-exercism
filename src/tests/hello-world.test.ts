import { hello } from '../core/hello-world';

xdescribe('HelloWorld', () => {

	it('says hello world', () => {
		expect(hello()).toEqual('Hello, World!');
	});

});