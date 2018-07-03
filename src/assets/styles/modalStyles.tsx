import { StyleSheet } from 'react-native'

export const modalStyles = StyleSheet.create({
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
})
