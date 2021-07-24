import { useState } from 'react'
import Head from 'next/head'
import { CardUser } from '../components/CardUser'
import { ContainerLimit } from '../components/ContainerLimit'
import { Header } from "../components/Header"
import { ModalUserRepositories } from '../components/ModalUserRepositories'

import { GridCardStyles } from '../styles/Home.module'

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useEffect } from 'react'

export default function Home() {
  const [selectedId, setSelectedId] = useState(null)
  const [usersList, setUsersList] = useState([])
  const [findUser, setFindUser] = useState('')
  const [userDetails, setUserDetails] = useState('')

  const [currentPage, setCurrentPage] = useState(1)

  const url_config = `&per_page=20&page=${currentPage}&order=DESC`

  useEffect(() => {
    findUser && fetch(`https://api.github.com/search/users?q=${findUser}${url_config}`)
      .then(response => response.json())
      .then(newUser => setUsersList(prevUser => [...prevUser, ...newUser.items]))
  }, [findUser, url_config])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {

      if (entries.some(entry => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }

    })

    intersectionObserver.observe(document.querySelector('#observer') as any)

    return () => intersectionObserver.disconnect()

  }, [])

  function captureInput(value: string) {
    setFindUser(value)
    setCurrentPage(1)
    setUsersList([])
  }

  function detailsOfUser(value: string) {
    setUserDetails(value)
    setSelectedId(value)
  }

  function closeModal() {
    setSelectedId(null)
  }

  function openModal(id: string) {
    setSelectedId(id)
  }

  return (
    <>
      <Head>
        <title>Buscar</title>
      </Head>
      <Header captureInput={captureInput} />
      <ContainerLimit>
        <GridCardStyles>
          <AnimateSharedLayout type="crossfade" >
            {usersList.map(user => {
              const { avatar_url, login, type } = user

              return (
                <motion.div key={login} layoutId={login} >
                  <CardUser avatar={avatar_url} userLogin={login} selectedId={login} detailsOfUser={detailsOfUser} type={type} />
                </motion.div>
              )
            })}
            <div id='observer'></div>

            <AnimatePresence>
              {selectedId && (
                <>
                  <div id="modal_background_transparent">
                    <motion.div className='modal_motion' layoutId={selectedId} >
                      <motion.div >
                        <ModalUserRepositories userDetails={userDetails} closeModal={closeModal} />
                      </motion.div>

                    </motion.div>

                  </div>
                  <div className='modal__background' onClick={() => setSelectedId(null)}></div>
                </>

              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </GridCardStyles>
      </ContainerLimit>
    </>
  )
}
