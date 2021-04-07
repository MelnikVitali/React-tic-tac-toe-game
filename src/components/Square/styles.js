import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    square: {
        maxWidth: '50px',
        maxHeight: '50px',
        minWidth: '50px  !important',
        minHeight: '50px',
        backgroundColor: 'transparent !important',
        fontSize: '24px !important',
        color: '#000 !important',
        fontWeight: '700 !important',
        border: `${theme.borderSquare} !important`,
        borderRadius: '0 !important'
    }
}));

export default useStyles;
