import { useState } from 'react'
import { FaGithub as GithubIcon } from 'react-icons/fa'
import { FiX as CrossIcon } from 'react-icons/fi'
import cla from 'classnames'

import styles from './sign-in-button.module.scss'

export const SignInButton = () => {
  const [isUserLoggedIn] = useState(true)
  const githubIconClassName = cla(
    styles['github-icon'],
    isUserLoggedIn
      ? styles['github-icon-signed']
      : styles['github-icon-unsigned']
  )

  return isUserLoggedIn ? (
    <button type="button" className={styles.wrapper}>
      <GithubIcon className={githubIconClassName} />
      Faustão Pentelho
      <CrossIcon className={styles['cross-icon']} />
    </button>
  ) : (
    <button type="button" className={styles.wrapper}>
      <GithubIcon className={githubIconClassName} />
      Sign in with Github
    </button>
  )
}
