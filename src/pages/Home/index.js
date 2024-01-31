import { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'

import { saveLink } from '../../services/storeLinks'

export default function Home() {

  const [Link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function shortenLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: Link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data);

      setLink('')

    } catch {
      alert("Ops parece que algo deu errado")
      setLink('')
    }
  }

  return (
    <div className="container-home">

      <div className="logo">
        <img src="/logo.png" alt="Sujeito link logo" />
        <h1>Encurtador Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">

        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={Link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={shortenLink}>Encurtar Link</button>

      </div>

      <Menu />

      {
        showModal && (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}

    </div>
  )
}