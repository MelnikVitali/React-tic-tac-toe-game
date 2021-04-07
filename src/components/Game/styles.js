import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
    container: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        textAlign:'center',
        justifyContent: 'center'
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
    historyContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        color: theme.palette.primary.main,
        textAlign:'left'
    },
    historyLinkActive:{
        fontWeight:'bold'
    }

}));

export default useStyles;
