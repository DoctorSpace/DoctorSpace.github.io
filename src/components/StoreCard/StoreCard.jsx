import React from 'react';
import Card from '../Card/Card';
import { useAuth } from '../../hooks/useAuth';

const StoreCard = ({posts, openSettings, openView, isAuth}) => {


    return (
        <div className='store__container-posts-card'>
            {posts.map((post) =>
              <Card post={post} openSettings={openSettings} openView={openView} key={post.id} isAuth={isAuth}/>
            )}
        </div>
    );
};

export default StoreCard;