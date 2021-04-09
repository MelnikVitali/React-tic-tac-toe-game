import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
    historyContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'left',
        marginBottom:pxToRem(50),
        color:theme.palette.primary.main
    },
    title: {
        border: theme.borderGameName,
        padding: `${pxToRem(2)} ${pxToRem(10)}`,
        borderRadius: pxToRem(6),
        color: theme.colorGameName,
        letterSpacing:pxToRem(3),
    },
}));

export default useStyles;
