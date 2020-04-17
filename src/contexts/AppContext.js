import React, { Component, createContext } from 'react';

export const AppContext = createContext();

class AppContextProvider extends Component {
    
    state = {
        novice: false, // Show all novice comments
        expert: false,  // Show all expert comments
        scoreIndex: 0,
        mobileNav: false
    }
    
    setNovice = (show) => { this.setState({ novice: show }); console.log("Debug: Show Novice - " + show); } 
    setExpert = (show) => { this.setState({ expert: show }); console.log("Debug: Show Expert - " + show); } 
    setScoreIndex = (index) => { this.setState({ scoreIndex: index}); console.log("Dubug: Score Index - " + index); };
    setMobileNav = (show) => { this.setState({ mobileNav:show}); console.log("Debug: Show MobileNavs - " + show); }

    render() {
        return(
            <AppContext.Provider value={{...this.state, setNovice:this.setNovice, setExpert:this.setExpert, setScoreIndex:this.setScoreIndex, setMobileNav:this.setMobileNav}}>
                { this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;
