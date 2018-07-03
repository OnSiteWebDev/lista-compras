import * as React from 'react'

import { NavigationActions } from 'react-navigation'
import { Dimensions } from 'react-native'

const small = Dimensions.get('window').height <= 480

class Utils extends React.PureComponent<{}, {}> {
    static resetNavigation(object, screen, params?) {
        object.props
            .navigation
            .dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: screen, params: params !== undefined ? params : {} })
                    ]
                }))
    }

    static getWidth() {
        return Dimensions.get('window').width
    }

    static getHeight() {
        return Dimensions.get('window').height
    }

    static isSmall() {
        return small
    }

}

export default Utils
