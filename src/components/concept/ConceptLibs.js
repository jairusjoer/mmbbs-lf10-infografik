import { createUseStyles } from 'react-jss'
/* Styles */
const useStyles = createUseStyles({
  ConceptLibs: {
  },
  ConceptLibsItem: {
  }
})
/* Scripts */
const libraries = [
  {
    name: "node-sass",
    version: "4.14.1",
    url: "",
  },
  {
    name: "react",
    version: "17.0.1",
    url: "",
  },
  {
    name: "react-dom",
    version: "17.0.1",
    url: "",
  },
  {
    name: "react-jss",
    version: "10.5.1",
    url: "",
  },
  {
    name: "react-router-dom",
    version: "5.2.0",
    url: "",
  },
  {
    name: "react-scripts",
    version: "4.0.2",
    url: "",
  },
  {
    name: "recharts",
    version: "2.0.4",
    url: "",
  },
  {
    name: "web-vitals",
    version: "1.0.1",
    url: "",
  }
]

/* Structure */
const ConceptLibs = () => {
  const styles = useStyles();
  return (
    <ul className={styles.ConceptLibs}>
      {libraries.map((item, key) =>
        <li key={key} className={styles.ConceptLibsItem}>
          <a target="_blank" rel="noreferrer" href={'https://www.npmjs.com/package/' + item.name}>{item.name}</a>: {item.version}
        </li>
      )}
    </ul>
  );
};

export default ConceptLibs;