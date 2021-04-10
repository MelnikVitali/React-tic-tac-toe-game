import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    gameName: {
        border: theme.borderGameName,
        padding: `${pxToRem(2)} ${pxToRem(6)}`,
        borderRadius: pxToRem(6),
        color: theme.colorGameName,
        letterSpacing: pxToRem(3),
        '&:hover': {
            color: theme.colorWhite,
            backgroundColor: theme.colorGameName,
            borderStyle: 'solid'
        }
    },
    historyLinkActive: {
        fontWeight: 800
    }
}));

export default useStyles;
