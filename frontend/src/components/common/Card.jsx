// src/components/common/Card.jsx
import React from 'react'

const Card = ({ 
  children, 
  className = '',
  padding = 'md',
  hover = false,
  shadow = 'md',
  border = false
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  const cardClasses = `
    bg-white rounded-xl
    ${paddingClasses[padding]}
    ${shadowClasses[shadow]}
    ${border ? 'border border-gray-200' : ''}
    ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
    ${className}
  `.trim()

  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
)

Card.Body = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
)

Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-6 pt-6 border-t border-gray-100 ${className}`}>
    {children}
  </div>
)

export default Card