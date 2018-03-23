
import React from 'react';

function AllAlbums(props){
    return (
    <div className="col-xs-4">
      <a className="thumbnail" href="#">
        <img src={props.album.imageUrl} />
        <div className="caption">
          <h5>
            <span>{props.album.name}</span>
          </h5>
          <small>{props.album.songs.name}</small>
        </div>
      </a>
    </div>
    )
  }


export default AllAlbums;
