import * as response from './response.json';
import { Post } from '../../interfaces/post';

export const getPostBySlug = async (slug: number) => {

  return {
    id: slug,
    title: 'My {slug} Blog Post',
    author: 'John Doe',
    content: 'This is the content of my first blog post.',
    datePublished: new Date()
  };
};

export const createPost = async (data: Post) => {
  return data;
};

export const updatePost = async (id: number, data: Post) => {
  return data;
};

export const getPostList = async () => {
  const res = response;
  return res.data;
};
