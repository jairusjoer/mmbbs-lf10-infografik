import { createUseStyles } from 'react-jss'

/* Styles */
const useStyles = createUseStyles({
  loading: {
    height: 2,
    width: '100%',
    background: 'linear-gradient(90deg, transparent 0%, white 100%)',
    animation: '$lds-ring 1.5s infinite',
  },
  '@keyframes lds-ring': {
    from: {
      backgroundPosition: '0vw'
    },
    to: {
      backgroundPosition: '100vw'
    }
  }
})

/* Structure */
function Loading() {
  const styles = useStyles();
  return (
    <div className={styles.loading}></div>

  );
}

export default Loading;