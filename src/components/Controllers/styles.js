import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core/styles');

const useStyles = makeStyles(theme => ({
    btn: {
        fontWeight: '700',
        margin: `${pxToRem(20)} `,
    },

}));

export default useStyles;
