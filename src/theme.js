import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

const theme = createMuiTheme({
    spacing: 6,
    typography: {
        fontFamily: [
            'Century Gothic',
            'Futura',
            'sans-serif'
        ].join(','),
        button: {
            textTransform: 'none'
        }
    },
    // palette: {
    //     primary: {
    //         main: '#ef5b4c',
    //         mainHover: '#D24335',
    //         contrastText: '#212529',
    //         errorText: '#db3445'
    //     },
    //     secondary: {
    //         main: '#007bff',
    //         contrastText: '#4c4b4b',
    //     },
    //     textPrimary: {
    //         main: '#ffffff'
    //     },
    // },
    colorWhite: '#ffffff',
    blackColor: '#000000',
    backgroundWhite: '#ffffff',
    borderSquare: '1px solid gray',
    borderGameName: '2px dashed',
    colorGameName: 'darkmagenta',
    borderScore: '1px solid #cccccc',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%',
                },
                'html, body': {
                    outline: 'none',
                },
                'body': {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#eeeeee',
                    fontSize: pxToRem(16),
                    color: '#212529',
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                },
            },
        },
        // MuiTypography: {
        //     h1: {
        //         fontSize: pxToRem(30),
        //         color: '#fff',
        //         fontWeight: 400,
        //         lineHeight: pxToRem(34),
        //         letterSpacing: pxToRem(-0.3),
        //         textTransform: 'uppercase',
        //     },
        //     h2: {
        //         fontSize: pxToRem(30),
        //         color: '#212529',
        //         fontWeight: 400,
        //         lineHeight: pxToRem(50),
        //     },
        //     h3: {
        //         fontSize: pxToRem(24),
        //         color: '#212529',
        //         fontWeight: 400,
        //         lineHeight: pxToRem(30),
        //     },
        //     h4: {
        //         fontSize: pxToRem(16),
        //         color: '#212529',
        //         fontWeight: 400,
        //         lineHeight: pxToRem(22),
        //     },
        //     h6: {
        //         fontSize: pxToRem(24),
        //         lineHeight: pxToRem(30),
        //     },
        //     subtitle1: {
        //         fontSize: pxToRem(16),
        //         color: '#fff',
        //         fontWeight: 400,
        //         lineHeight: pxToRem(24),
        //     },
        //     body1: {
        //         fontSize: pxToRem(16),
        //         color: '#4c4b4b',
        //         fontWeight: 400,
        //         lineHeight: pxToRem(24),
        //     },
        //     body2: {
        //         color: '#212529'
        //     }
        // },
        // MuiDrawer: {
        //     paper: {
        //         overflow: 'hidden',
        //     }
        // },
        // MuiToolbar: {
        //     regular: {
        //         minHeight: `${pxToRem(41)} !important`,
        //         height: 'inherit'
        //     },
        // },
        // MuiListItem: {
        //     gutters: {
        //         paddingRight: 0,
        //         paddingLeft: 0,
        //     },
        // },
        // MuiButton: {
        //     root: {
        //         textTransform: 'none',
        //         fontSize: pxToRem(16),
        //         fontWeight: 600,
        //         padding: `${pxToRem(4.5)} ${pxToRem(58.5)}`,
        //     },
        //     containedPrimary: {
        //         color: '#fefefe',
        //         '&:hover': {
        //             backgroundColor: '#D24335'
        //         }
        //     },
        //     textPrimary: {
        //         '&:hover': {
        //             backgroundColor: 'transparent'
        //         }
        //     }
        // },
        // MuiFormControlLabel: {
        //     label: {
        //         fontFamily: 'PT Sans',
        //         color: '#212529',
        //     }
        // },
        // MuiFormLabel: {
        //     root: {
        //         fontFamily: 'PT Sans',
        //         color: '#212529',
        //     }
        // },
        // MuiInputLabel: {
        //     root: {
        //         fontSize: pxToRem(18),
        //         color: '#212529',
        //         '&.Mui-focused': {
        //             color: '#212529'
        //         }
        //     }
        // },
        // PrivateSwitchBase: {
        //     root: {
        //         padding: 0,
        //         paddingRight: 8
        //     }
        // },
        // MuiFormHelperText: {
        //     root: {
        //         marginTop: 0,
        //         '&.Mui-error': {
        //             color: '#db3445'
        //         }
        //     }
        // },
        // MuiDialog: {
        //     paper: {
        //         margin: pxToRem(16)
        //     },
        //     paperWidthSm: {
        //         maxWidth: pxToRem(395),
        //         width: pxToRem(395)
        //     }
        // }
    },
});

export default theme;
