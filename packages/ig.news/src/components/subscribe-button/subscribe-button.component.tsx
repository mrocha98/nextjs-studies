import cla from 'classnames'

import styles from './subscribe-button.module.scss'

export interface SubscribeButtonProps {
  className?: string
}

export const SubscribeButton = ({ className = '' }: SubscribeButtonProps) => {
  return (
    <button type="button" className={cla(styles.wrapper, className)}>
      Subscribe now
    </button>
  )
}
