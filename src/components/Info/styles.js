import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    result: {
        minWidth: pxToRem(380),
        maxWidth: pxToRem(600),
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: theme.blackColor,
        fontWeight: 550
    },
    score: {
        display: 'inline-block',
        width: pxToRem(30),
        height: pxToRem(30),
        padding: 0,
        backgroundColor: theme.backgroundWhite,
        lineHeight: pxToRem(30),
        border: theme.borderScore,
        borderRadius: pxToRem(2),
        fontWeight: 600,
        color: theme.palette.primary.main
    },
    maxWin: {
        fontSize: pxToRem(32)
    },
    statusResult: {
        fontWeight: 600,
        color: theme.palette.primary.main
    }
}));

export default useStyles;
