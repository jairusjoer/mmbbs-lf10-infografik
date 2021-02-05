import { createUseStyles } from 'react-jss'
/* Styles */
const styles = createUseStyles({
  chapter: {
    gridColumn: 'content',
    padding: '48px 24px 72px',
    borderRadius: 24,
    //backgroundColor: 'var(--colorBaseGray100)'
    border: '1px solid var(--colorBaseGray090)'
  },
  contents: {
    marginTop: 48,
    marginBottom: -24,
    padding: '24px 0',
    borderTop: '1px solid var(--colorBaseGray090)',
    borderBottom: '1px solid var(--colorBaseGray090)'
  }
})
/* Structure */
const Chapter = (props) => {
  return (
    <div className={styles().chapter} id={props.title}>
      <h2 className="chapter-title">{props.title}</h2>
      {props.children[0].props.title &&
        <ol className={styles().contents}>
          {props.children.map((item, key) => <li key={key} className="chapter-item"><a className="chapter-link" href={'#' + item.props.title.replace(/\s+/g, '-').toLowerCase()}>{item.props.title}</a></li>)}
        </ol>
      }
      {props.children}
    </div>
  );
};

export default Chapter;