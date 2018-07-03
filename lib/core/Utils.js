"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_navigation_1 = require("react-navigation");
const react_native_1 = require("react-native");
const small = react_native_1.Dimensions.get('window').height <= 480;
class Utils extends React.PureComponent {
    static resetNavigation(object, screen, params) {
        object.props
            .navigation
            .dispatch(react_navigation_1.NavigationActions.reset({
            index: 0,
            actions: [
                react_navigation_1.NavigationActions.navigate({ routeName: screen, params: params !== undefined ? params : {} })
            ]
        }));
    }
    static getWidth() {
        return react_native_1.Dimensions.get('window').width;
    }
    static getHeight() {
        return react_native_1.Dimensions.get('window').height;
    }
    static isSmall() {
        return small;
    }
}
exports.default = Utils;
//# sourceMappingURL=Utils.js.map