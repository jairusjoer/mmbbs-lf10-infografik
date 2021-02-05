import { createUseStyles } from 'react-jss'
import Navigation from "../components/Navigation";
/* Styles */
const styles = createUseStyles({
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto [content] minmax(272px, 720px) auto',
    gridGap: '72px 24px',
    padding: '72px 0'
  }
})
/* Structure */
function Concept() {
  return (
    <div className="concept">
      <Navigation/>
    </div>
  );
}

export default Concept;
