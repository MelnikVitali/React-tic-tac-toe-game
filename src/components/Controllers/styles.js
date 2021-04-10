import { makeStyles } from '@material-ui/core/styles';

import { pxToRem } from '../../utils/pxToRem';

const useStyles = makeStyles(theme => ({
    root: {
        padding: pxToRem(12)
    },
    btn: {
        fontWeight: '700',
        margin: `${pxToRem(20)} `,
    },
}));

export default useStyles;
