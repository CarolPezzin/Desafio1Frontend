import { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [result, setResult] = useState({})

    const SubmitApi = async (data) => {
        
        const response = await api.post("", data);
        const calcResult = response.data        
        setResult(calcResult)
    }

    return (
    <AuthContext.Provider value={{result, SubmitApi}}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider