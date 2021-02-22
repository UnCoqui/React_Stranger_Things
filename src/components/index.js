/**
 * The index.js file is used to re-export from our separate files, that way rather than write:
 * 
 * import Feature from './components/Feature';
 * 
 * we can write:
 * 
 * import { Feature } from './components';
 * 
 * since index.js is assumed as part of the import when you specify a folder
 * 
 * Re-export Feature, Loading, Preview, Search, and Title from their respective files
 */
export { default as CreatePost } from './CreatePost.js';
export { default as Messages } from './profile/Messages.js';
export { default as SendMessage } from './SendMessage.js';
export { default as MyPosts } from './profile/MyPosts.js';
export { default as Profile } from './profile/Profile.js';
export { default as Posts } from './Posts.js';
export { default as Post } from './Post.js';
export { default as App } from './App';
export { default as LoginPage } from './LoginPage';
export { default as Title } from './Title';
export { default as NavBar } from './NavBar';

