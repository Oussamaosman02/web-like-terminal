'use client'
import { Fragment, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home () {
  const tipo = useRef()
  const [messi, setMessi] = useState([])
  const anchor = <a href='https://messi.com'>messi</a>
  const term = [
    {
      name: 'help',
      desc: [
        'This is the help',
        'The commands availbale are:',
        'ls  -- for listing something',
        'cd  -- for moving to some directory',
        'messi  -- for going to messi official website',
        'cat  -- for showing some file info'
      ]
    },
    {
      name: 'ls',
      desc: ['messi/', 'README.md']
    },
    {
      name: 'cd messi',
      desc: ['Estas en messi']
    },
    {
      name: 'messi',
      desc: ['la web de messi es :', anchor]
    },
    {
      name: 'cat README.md',
      desc: ['Hello world!']
    }
  ]
  function handleChange ({ key }) {
    const valor = tipo.current.value
    if (key === 'Enter') {
      setMessi([...messi, valor])
      tipo.current.value = ''
    }
  }
  return (
    <div className={styles.container}>
      <pre className={styles.title}>{`
████████ ███████ ██████  ███    ███ ██ ███    ██  █████  ██      
   ██    ██      ██   ██ ████  ████ ██ ████   ██ ██   ██ ██      
   ██    █████   ██████  ██ ████ ██ ██ ██ ██  ██ ███████ ██      
   ██    ██      ██   ██ ██  ██  ██ ██ ██  ██ ██ ██   ██ ██      
   ██    ███████ ██   ██ ██      ██ ██ ██   ████ ██   ██ ███████ 
                                                                 
                                                                 
`}
      </pre>
      <p>
        This is a web based terminal style, so try it out running help command.
      </p>
      <div className={styles.terminal}>
        {messi.map((dat, i) => {
          return (
            <Fragment key={dat + '' + i}>
              <span>JavaScript &gt; {dat}</span>
              {term.map((ter) => {
                if (dat === ter.name) {
                  return (
                    <div key={dat + '' + ter + i}>
                      {ter.desc.map((al) => {
                        return (
                          <Fragment key={dat + '' + al + ter + i}>
                            <span>{al}</span>
                            <br />
                          </Fragment>
                        )
                      })}
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </Fragment>
          )
        })}
      </div>
      <div className={styles.inpcont}>
        <span>JavaScript &gt; </span>
        <input
          className={styles.inpu}
          ref={tipo}
          type='text'
          autoFocus
          spellCheck={false}
          onKeyDown={(e) => handleChange(e)}
        />
      </div>
    </div>
  )
}
