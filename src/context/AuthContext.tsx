import React, {createContext, useReducer} from 'react';
import {AuthReducer} from './AuthReducer';

// * define what information will be stored

export interface AuthState {
  isLoggedIn: Boolean;
  userName?: String;
  favoriteIcon?: string;
}

// * initial state

export const authInitianState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// * how it looks and what context exposes

export interface AuthContextProps {
  authState: AuthState;
  changeFavIcon: (iconName: string) => void;
  changeUsername: (userName: string) => void;
  logOut: () => void;
  singIn: () => void;
}

// * create context

export const AuthContext = createContext({} as AuthContextProps);

// * provider component

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitianState);

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (userName: string) => {
    dispatch({type: 'changeUsername', payload: userName});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const singIn = () => {
    dispatch({type: 'singIn'});
  };

  return (
    <AuthContext.Provider
      value={{authState, singIn, changeFavIcon, logOut, changeUsername}}>
      {children}
    </AuthContext.Provider>
  );
};
