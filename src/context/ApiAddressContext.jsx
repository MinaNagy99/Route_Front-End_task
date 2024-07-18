import axios from "axios";
import { createContext, useState } from "react";

export let ApiAddressContext = createContext();

function ApiAddressContextProvider(props) {

    const [apiAddress, setApiAddress] = useState('https://json-server-ashy-pi.vercel.app/');


    return <ApiAddressContext.Provider value={{apiAddress, setApiAddress}}>
        {props.children}
    </ApiAddressContext.Provider>
}

export default ApiAddressContextProvider