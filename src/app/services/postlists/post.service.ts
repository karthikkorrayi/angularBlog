import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  postsdetails = [
    {
      id: 1,
      topic: 'Introduction to Artificial Intelligence',
      image: 'https://example.com/ai-image.jpg',
      detail: 'Exploring the fundamentals of Artificial Intelligence and its applications in various domains.'
    },
    {
      id: 2,
      topic: 'Web Development Technologies',
      image: 'https://example.com/web-dev-image.jpg',
      detail: 'A comprehensive guide to modern web development technologies, frameworks, and best practices.'
    },
    {
      id: 3,
      topic: 'Data Science and Machine Learning',
      image: 'https://example.com/data-science-image.jpg',
      detail: 'Diving into the world of data science, machine learning, and their impact on decision-making.'
    },
    // Add more posts as needed
  ];
  
}
