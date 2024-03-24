import React from 'react';
import Card from './Card';

test('renders Card component', () => {
  // Mock article data
  const article = {
    id: 1,
    image_url: 'https://example.com/image.jpg',
  };

  // Render the Card component
  const { container } = render(<Card article={article} />);

  // Verify that the product image is rendered
  const imageElement = container.querySelector('img');
  expect(imageElement).toBeInTheDocument();

  // Verify that the "Ver detalles" link is rendered
  const linkElement = container.querySelector('a[href="/article/1"]');
  expect(linkElement).toBeInTheDocument();
});
