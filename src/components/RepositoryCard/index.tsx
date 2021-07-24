import { RepositoryCardStyles } from './styles.module'

interface RepositoryCardProps {
  title: string
  link: string
}

export function RepositoryCard({ title, link }: RepositoryCardProps) {
  return (
    <RepositoryCardStyles>
      <p>{title}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">acessar</a>
    </RepositoryCardStyles>
  )
}