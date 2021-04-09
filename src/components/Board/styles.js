import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles({
    board: {
        width: pxToRem(210),
        height: pxToRem(210),
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: pxToRem(6)
    }
});

export default useStyles;