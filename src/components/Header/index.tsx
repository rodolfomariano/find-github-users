import { useState } from "react"
import { FormEvent } from "react"
import { HeaderStyles } from "./styles.module"

interface HeaderProps {
  captureInput: (value: string) => string | void
}

export function Header({ captureInput }: HeaderProps) {
  const [inputValue, setInputValue] = useState('')

  function findUser(event: FormEvent) {
    event.preventDefault()

    captureInput(inputValue)
    setInputValue('')
  }

  return (
    <HeaderStyles>
      <div className="container">
        <h1>Buscar no GitHub</h1>

        <form>
          <input
            type="text"
            placeholder='Digite o nome do usuário'
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
          <button type="submit" onClick={findUser}>Buscar</button>
        </form>
      </div>

    </HeaderStyles>
  )
}