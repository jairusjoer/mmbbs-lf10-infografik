import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  chapter: {
    display: 'grid',
    gridRowGap: 16,
    gridColumn: 'content',
    padding: '0',
    borderRadius: 24,
  },
  chapterTitle: {
    padding: '0 16px',
    marginBottom: 32
  },
  chapterContents: {
    margin: '0 16px 32px',
    position: 'relative',
    padding: '16px',
    borderTop: '1px solid var(--colorBaseGray090)',
    borderBottom: '1px solid var(--colorBaseGray090)'
  }
})
/* Structure */
const Chapter = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.chapter} id={props.title}>
      <h2 className={styles.chapterTitle}>{props.title}</h2>
      {Array.isArray(props.children) &&
        <ol className={styles.chapterContents}>
          {props.children.map((item, key) => <li key={key} className={styles.chapterItem}><a className={styles.chapterLink} href={'#' + item.props.title.replace(/\s+/g, '-').toLowerCase()}>{item.props.title}</a></li>)}
        </ol>
      }
      {props.children}
    </div>
  );
};

export default Chapter;