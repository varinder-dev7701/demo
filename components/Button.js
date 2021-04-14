import styles from './Button.module.css'
import {useRouter} from 'next/router'

 export default function Button() {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push('/')
  }
  return (
    <button
      type="button" onClick={handleClick}
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  )
}
