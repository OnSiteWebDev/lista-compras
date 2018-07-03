import {
    StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
    TabText: {
        fontSize: 8,
        color: 'white'
    },
    HeaderBtnText: {
        fontSize: 8
    }
})

export const colors = {
    dark_green_blue: '#235f63',
    pale_grey: '#f5f6fa',
    seafoam_blue: '#6ed79f',
    greyish_brown: '#464646',
    booger: '#8bc34a',
    silver: '#dcdde0',
    white: '#ffffff',
    green_blue: '#00aa8d',
    mid_green: '#51b34c',
    greenish_teal: '#33bba4',
    warm_grey: '#9b9b9b',
    tangerine: '#ff9800',
    bright_orange: '#ff6d00',
    dark_sky_blue: '#42bdd5',
    error: '#ff5354',
    alert: '#ffcc4d'

}

export const modalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0
    }
})