import { ReactNode } from 'react'
import { ContainerLimitStyles } from './styles.module'

interface ContainerLimitProps {
  children: ReactNode
}

export function ContainerLimit({ children }: ContainerLimitProps) {
  return (
    <ContainerLimitStyles>
      <div className="content">
        {children}
      </div>
    </ContainerLimitStyles>
  )
}