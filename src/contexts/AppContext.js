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
        expert: false,  // Show all expert comments
        scoreIndex: 0,
        scoreData: null,
        draw: null
    }
    
    setNovice = (show) => { this.setState({ novice: show }); console.log("Debug: Show Novice - " + show); } 
    setExpert = (show) => { this.setState({ expert: show }); console.log("Debug: Show Expert - " + show); } 
    setScoreIndex = (index) => { this.setState({ scoreIndex: index}); console.log("Dubug: Score Index - " + index); };
    setDrawRef = (drawRef) => { this.setState({ draw: drawRef}); console.log("Dubug: Draw Ref Set");
    
    }

    render() {
        return(
            <AppContext.Provider value={{...this.state, setNovice:this.setNovice, setExpert:this.setExpert, setScoreIndex:this.setScoreIndex, setDrawRef:this.setDrawRef}}>
                { this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;
