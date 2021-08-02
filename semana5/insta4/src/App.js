import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>

        <MainContainer>
        <Post
          nomeUsuario={'Erick'}
          fotoUsuario={'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE'}
          fotoPost={'https://picsum.photos/200/200'}
        />
        </MainContainer>

        <MainContainer>
                <Post
                  nomeUsuario={'Guilherme'}
                  fotoUsuario={'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'}
                  fotoPost={'https://picsum.photos/150/150'}
                />
        </MainContainer>
      </div>
    );
  }
}

export default App;
