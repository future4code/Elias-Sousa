import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostDetailPage=()=> {
  useProtectedPage()
  return (
    <div>
      PostDetailPage , onde é possível comentar o post q vc clicou e ver os comentários feito nele
    </div>
  );
}

export default PostDetailPage;