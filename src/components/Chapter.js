import React from 'react';
import '../assets/css/components/Chapter.scss';

const Chapter = (property) => {
  // Chapter Component

  return (
    <div className='chapter' id={property.title}>
      <h2 className="chapter-title">{property.title}</h2>
      {property.children[0].props.title &&
        <ol className='chapter-contents'>
          {property.children.map((i) => <li className="chapter-item"><a className="chapter-link" href={'#' + i.props.anchor}>{i.props.title}</a></li>)}
        </ol>
      }
      {property.children}
    </div>
  );
};

export default Chapter;