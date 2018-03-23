import React from 'react';
import AllAlbums from './AllAlbums'
import axios from 'axios';

const fakeAlbums = [
  {
    name: 'Abbey Road',
    id: 1,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 1,
        name: 'Romeo & Juliette',
        artists: [
          { name: 'Bill' }
        ],
        genre: 'Funk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      },
      {
        id: 2,
        name: 'White Rabbit',
        artists: [
          { name: 'Bill' },
          { name: 'Alice' }
        ],
        genre: 'Fantasy',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      },
      {
        id: 3,
        name: 'Lucy in the Sky with Diamonds',
        artists: [
          { name: 'Bob' }
        ],
        genre: 'Space',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  },
  {
    name: 'Yellow Submarine',
    id: 2,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 4,
        name: 'London Calling',
        artists: [
          { name: 'Bill' }
        ],
        genre: 'Punk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  }
];


export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      albums: []
    }
  }
  componentDidMount(){

    axios.get('api/albums')
      .then(response => {
        return response.data;
      })
      .then(data=>{
        return this.setState({albums: data})
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });

  }

  render() {
    return (
    <div className="col-xs-10">
        <h3>Albums</h3>
        <div className="row">
    <div>


      {
        this.state.albums.map((album) => {
           return <AllAlbums  key={album.id} album={album}/>
        }) // watch out - no semicolon!
     }

      </div>
  </div>
</div>
    )
  }
}



