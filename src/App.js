import {useMemo} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import Routes from './routes';

const App = () => {
    const theme = useMemo(
        () => createTheme({
            palette: {
                primary: {
                    main: '#ef4444',
                },
                secondary: {
                    main: '#272727'
                }
            },
        }),
        [],
    );

    return (
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
    )
}

export default App;
