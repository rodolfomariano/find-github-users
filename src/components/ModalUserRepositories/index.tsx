import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ModalUserRepositoriesStyles } from './styles.module'
import { RepositoryCard } from '../RepositoryCard'

interface ModalUserRepositoriesProps {
  userDetails: string
  closeModal: () => void
}

interface UserInformation {
  avatar: string
  userName: string
  userLogin: string
  userRepos: string
  repos_url: string
}

export function ModalUserRepositories({ userDetails, closeModal }: ModalUserRepositoriesProps) {
  const [userInformation, setUserInformation] = useState<UserInformation>({} as UserInformation)
  const [userRepositoriesList, setUserRepositoriesList] = useState([])
  const [userRepositoriesLink, setUserRepositoriesLink] = useState('')

  const repositoriesList = userRepositoriesLink.length

  const [currentPage, setCurrentPage] = useState(1)

  const url_config = `?per_page=5&page=${currentPage}&order=DESC`

  useEffect(() => {
    fetch(`https://api.github.com/users/${userDetails}`)
      .then(response => response.json())
      .then(data => {
        const { avatar_url, name, login, public_repos, repos_url } = data

        setUserInformation({
          avatar: avatar_url,
          userName: name,
          userLogin: login,
          userRepos: public_repos,
          repos_url
        })

        setUserRepositoriesLink(repos_url)

      })

  }, [userDetails, url_config])

  useEffect(() => {
    fetch(`${userRepositoriesLink}${url_config}`)
      .then(response => response.json())
      .then(repositories => setUserRepositoriesList(newRepository => [...newRepository, ...repositories]))

  }, [userRepositoriesLink, url_config])

  useEffect(() => {
    if (repositoriesList > 5) {

      const intersectionObserver = new IntersectionObserver(entries => {
        console.log(entries)
        if (entries.some(entry => entry.isIntersecting)) {
          setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
        }

      })

      intersectionObserver.observe(document.querySelector('#observerModal') as any)

      return () => intersectionObserver.disconnect()
    }

  }, [repositoriesList])

  return (
    <ModalUserRepositoriesStyles>
      <header className='modal__header'>
        <div className='image__container'>
          {userInformation.avatar ?
            <Image className='user__image' src={userInformation.avatar} alt="" width={100} height={100} /> :
            'Sem foto'
          }

        </div>

        <div className="user__content">
          <h1>{userInformation.userName}</h1>
          <span>{userInformation.userLogin}</span>
          <button className='close' onClick={() => closeModal()}>X</button>
        </div>
      </header>
      <div className={'separator'} />
      <span className='span_total_repositories'>Repositórios publicos {userInformation.userRepos}</span>
      <div className='repositories_list'>
        {userRepositoriesList && userRepositoriesList.map(repo => <RepositoryCard key={repo.name} title={repo.name} link={repo.html_url} />)}

        <div id='observerModal'></div>
      </div>
    </ModalUserRepositoriesStyles>
  )
}