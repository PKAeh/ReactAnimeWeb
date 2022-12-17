import { Link } from 'react-router-dom'
import type React from 'react'

interface BaseLinkProps {
  children?: React.ReactNode
  to: string
}

const BaseLink = ({ children, to }: BaseLinkProps): JSX.Element => (
  <Link to={to} style={{ textDecoration: 'nome' }}>
    {children}
  </Link>
)

export default BaseLink
