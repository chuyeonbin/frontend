import React from 'react';
import * as S from './style';

const EditPosts = ({ editPosts }) => {
  return (
    <S.EditPosts>
      {editPosts.map(editPost => (
        <EditPost key={editPost.postId} editPost={editPost} />
      ))}
    </S.EditPosts>
  );
};

export default EditPosts;
