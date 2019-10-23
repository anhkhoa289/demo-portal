import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'


const Code = ({ source, language = 'javascript' }) => {
  const [code, setCode] = useState('')

  const fetch = async () => {
    if (source) {
      const { data } = await axios.get(source)
      setCode(data)
    }
  }

  useEffect(() => {
    fetch()
  }, [source])
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

export default Code
