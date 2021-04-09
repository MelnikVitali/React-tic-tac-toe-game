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
    colorWhite: '#ffffff',
    blackColor: '#000000',
    backgroundWhite: '#ffffff',
    backgroundGray: '#e0e0e0',
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
        MuiTypography: {
            h6: {
                letterSpacing: pxToRem(1),
                fontWeight: 700
            }
        },
        MuiBackdrop: {
            root: {
                opacity: '0.1 !important'
            }
        },
        MuiDialogTitle: {
            root: {
                paddingBottom: pxToRem(4)
            }
        },
        MuiDialogActions: {
            root: {
                justifyContent: 'space-between'
            }
        },
        MuiDialog: {
            paper: {
                paddingRight: `${pxToRem(20)} !important`,
                paddingLeft: `${pxToRem(20)} !important`
            }
        },
    },
});

export default theme;
