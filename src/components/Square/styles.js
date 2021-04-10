import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    square: {
        maxWidth: pxToRem(70),
        maxHeight: pxToRem(70),
        minWidth: `${pxToRem(70)} `,
        minHeight: pxToRem(70),
        backgroundColor: 'transparent',
        fontSize: `${pxToRem(26)} `,
        color: `${theme.blackColor}`,
        fontWeight: '800',
        border: `${theme.borderSquare} `,
        borderRadius: 0
    },
    winningSquare: {
        color: `${theme.palette.secondary.main}`,
        backgroundColor: `${theme.backgroundGray} `,
    }
}));

export default useStyles;
