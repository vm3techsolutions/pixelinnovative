import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import './PageTitle.css';

const PageTitle = () => {
  const location = useLocation(); // Get the current path
  const { slug } = useParams(); // Get the slug from the URL

  // If we're on the home page, do not display the PageTitle component
  if (location.pathname === '/') {
    return null;
  }

  // Convert the slug or pathname to a readable page name
  const pageName = slug
    ? slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
    : location.pathname.slice(1).replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

  // Generate breadcrumbs
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    return { name: segment.replace(/-/g, ' ').toUpperCase(), path };
  });

  return (
    <div className="page-title-section ">
      <h1 className="page-title">{pageName}</h1>
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index}>
            <span className="breadcrumb-separator"> / </span>
            <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
          </span>
        ))}
      </nav>
    </div>
  );
};

export default PageTitle;
