import React, {createContext, useState} from "react";

export const AuthContext = createContext(); //Context oluşturuldu.

// class AuthContextProvider extends React.Component {

//     state = {
//         isLoggedIn : true
//     };

//     changeAuthStatus = () => {
//         this.setState({isLoggedIn : !this.state.isLoggedIn});
//     }

//     render() {
//         return(

//             <AuthContext.Provider value = {{ ...this.state, changeAuthStatus:this.changeAuthStatus}} >
//                 {this.props.children}
//             </AuthContext.Provider>

//         )
//     }
// }


//  useState hook'u ile yapımı


const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return(

         <AuthContext.Provider value = {{ isLoggedIn, changeAuthStatus:changeAuthStatus}} >
             {props.children}
         </AuthContext.Provider>

    )
}

export default AuthContextProvider;