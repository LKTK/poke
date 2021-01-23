import { ThemeProvider  } from '@material-ui/core/styles'
import theme from 'src/config/Theme/theme.config';

const LonPokeThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}  

export default LonPokeThemeProvider