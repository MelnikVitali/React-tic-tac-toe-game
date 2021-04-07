import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core/styles');

const useStyles = makeStyles(theme => ({
    gameSettingContainer: {
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        paddingTop: `${pxToRem(30)}`,
        paddingBottom: `${pxToRem(10)}`,
        margin: pxToRem(20),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: theme.spacing(4)
    },
    btnGroup: {
        minWidth: pxToRem(200),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    btn: {
        fontWeight: '600 !important',
        margin: `${theme.spacing(2)} !important`,
    },
    btnPiece:{
      color: `${theme.palette.secondary.main} !important`
    },
    btnBack: {
        width: pxToRem(170),
        fontWeight: '700 !important',
        fontSize: pxToRem(30),
    },
    or:{
        margin:`0 ${pxToRem(12)}`,
        color:theme.palette.primary.main,
        fontWeight: 600
    }
}));

export default useStyles;
