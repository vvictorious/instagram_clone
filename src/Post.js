import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const Post = ({caption, username, imageURL}) => {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar
                    className='post__avatar'
                    alt='Victor'
                    src={imageURL}
                ></Avatar>
                <h3>Username</h3>
            </div>
            <img className='post__image' alt='' src='https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60 100w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60 200w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60 300w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60 400w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 500w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60 600w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60 700w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60 800w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60 900w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60 1000w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60 1100w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60 1200w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60 1296w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60 1400w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60 1600w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60 1800w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60 2000w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=60 2200w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=60 2400w, https://images.unsplash.com/photo-1609764366671-bab8249efbcf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2592&q=60 2592w'/>
            <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post