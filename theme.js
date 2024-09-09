import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: [
                        'Poppins',
                        'sans-serif'
                    ].join(','),
                },
            },
        },
    },
    tab: {
        defaultProps: {
          className: "",
          activeClassName: "",
          disabled: false,
        },
        styles: {
          base: {
            tab: {
              initial: {
                fontFamily: [
                    'Poppins',
                    'sans-serif'
                ].join(','),
              },
            },
          },
        },
      },
});

export default theme;
