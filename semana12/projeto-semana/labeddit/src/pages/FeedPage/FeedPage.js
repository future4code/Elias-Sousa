import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { posts } from '../../services/user'
import { useEffect } from 'react'


const FeedPage=()=> {
  useProtectedPage()

  useEffect(() => {
    posts()
  });

  return (
    <div>
      Lista de Posts , onde tbm poderei criar um post
    </div>
  );
}

export default FeedPage;