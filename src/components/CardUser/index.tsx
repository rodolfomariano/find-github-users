import Image from 'next/image'
import { CardUserStyles } from './styles.module'

import { IoIosAdd } from 'react-icons/io'

interface CardUserProps {
  avatar: string
  userLogin: string
  selectedId: string | null
  detailsOfUser: (value: string) => void
  // openModal: (id: string) => void
  type: string
}

export function CardUser({ avatar, userLogin, selectedId, detailsOfUser, type }: CardUserProps) {

  return (
    <CardUserStyles>
      <div>
        <Image src={avatar} alt="" width={70} height={70} />
      </div>

      <div className="user__content">
        <div>
          <div className='card__header'>
            {/* <span>{type}</span> */}
            {/* <p>Repositórios publicos: <span>{publicRepos}</span> </p> */}
          </div>
          <h2>{userLogin}</h2>
          <span className='span_login'>{type}</span>
        </div>
        <button onClick={() => detailsOfUser(userLogin)}>Saiba mais <IoIosAdd size={16} /> </button>
      </div>
    </CardUserStyles>

  )
}