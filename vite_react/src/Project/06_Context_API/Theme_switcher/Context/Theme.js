// Another way you can create a context_API:----

    import {createContext,useContext} from 'react'

    //Create context object.
    //We can give default object to context-object.

    export const ThemeContext=createContext(
        {
            themeMode:"light", //Set a default variable,if any software crash occurs.
            darkTheme:()=>{},  //just provide function not it's functionality.
            lightTheme:()=>{},
        }
    );

    //Context provider
    export const ThemeProvider=ThemeContext.Provider

    //You can create a custom hook also
    export default function useTheme(){
        return useContext(ThemeContext);
    }