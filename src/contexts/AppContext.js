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
        novice: false, // Show all novice comments
        expert: false  // Show all expert comments
    }
    
    setNovice = (show) => { this.setState({ novice: show }); console.log("Debug: Show Novice - " + show); } 
    setExpert = (show) => { this.setState({ expert: show }); console.log("Debug: Show Expert - " + show); } 

    render() {
        return(
            <AppContext.Provider value={{...this.state, setNovice:this.setNovice, setExpert:this.setExpert}}>
                { this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;
