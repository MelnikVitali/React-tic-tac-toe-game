import { makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles({
    board: {
        width: pxToRem(150),
        height: pxToRem(150),
        display: 'flex',
        flexWrap: 'wrap',
    }
});

export default useStyles;