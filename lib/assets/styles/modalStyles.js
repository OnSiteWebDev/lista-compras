"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.modalStyles = react_native_1.StyleSheet.create({
    button: {
        backgroundColor: '#00aa8d',
        padding: 12,
        margin: 16,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10
    },
    bottomModal: {
        justifyContent: 'flex-end',
        marginTop: 20,
        marginBottom: -30
    },
    modalText: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 18
    }
});
//# sourceMappingURL=modalStyles.js.map