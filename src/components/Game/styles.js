import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
    container: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        textAlign: 'center',
    },
    gameName: {
        border: theme.borderGameName,
        padding: `${pxToRem(2)} ${pxToRem(6)}`,
        borderRadius: pxToRem(6),
        color: theme.colorGameName,
        '&:hover': {
            color: theme.colorWhite,
            backgroundColor: theme.colorGameName,
            borderStyle: 'solid'
        }
    },

}));

export default useStyles;
