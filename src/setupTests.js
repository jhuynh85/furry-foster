import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Mock localStorage for testing
const localStorageMock = (function() {
	let store = {};

	return {
		getItem: function(key) {
			return store[key] || null;
		},
		setItem: function(key, value) {
			store[key] = value.toString();
		},
		clear: function() {
			store = {};
		}
	};
})();

Object.defineProperty(window, "localStorage", {
	value: localStorageMock
});
