import React, { Component, createContext } from 'react';

export const exploreModes = {
    NONE: 'None', 
    NOVICE: 'Novice',
    EXPERT: 'Expert',
    BOTH: 'Both'
}

export const AppContext = createContext();

class AppContextProvider extends Component {
    
    state = {
        exploreMode: exploreModes.NONE
    }

    setExploreMode = (mode) => {
        this.setState({ exploreMode: mode});
        console.log("Debug: Setting ExploreMode - " + mode);
    }

    render() {
        return(
            <AppContext.Provider value={{...this.state, setExploreMode:this.setExploreMode}}>
                { this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;
