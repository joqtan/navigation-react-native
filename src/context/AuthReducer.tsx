import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'changeUsername'; payload: string}
  | {type: 'logOut'}
  | {type: 'singIn'};

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};
    case 'changeUsername':
      return {...state, userName: action.payload};
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };
    case 'singIn':
      return {...state, isLoggedIn: true, userName: 'no username yet'};
    default:
      return state;
  }
};
