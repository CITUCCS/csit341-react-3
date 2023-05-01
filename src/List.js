import React from 'react'

// component to display a tech list
const List = props =>
    (
        <>
          {props.list.map(item => {
            return (
              <div key={item.objectID}>
                <br />
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <br />
                <span>{item.author}</span>
                <br />
                <span>{item.num_comments}</span>
                <br />
                <span>{item.points}</span>
                <br />
                <br />
              </div>
            );
          })}
        </>
    );

export default List