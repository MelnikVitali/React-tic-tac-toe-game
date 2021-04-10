import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    btnGroup: {
        minWidth: pxToRem(200),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    btn: {
        fontWeight: '600',
        marginBottom: `${pxToRem(3)}`,
    },
    btnPiece: {
        padding: `${pxToRem(5)} ${pxToRem(35)}`,
        color: `${theme.palette.secondary.main} `,
    },
    btnBack: {
        fontWeight: '900',
    },
    or: {
        color: theme.palette.primary.main,
        fontWeight: 600
    }
}));

export default useStyles;
