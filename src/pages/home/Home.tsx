import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FakeStore } from '../../interfaces/fakestore.interface'
import { getData } from '../../services/fakestore.service'
import ListFakeStore from '../../components/list-fakestore/ListFakeStore'
import Loading from '../../components/loading/Loading'

const Home = () => {
  const [fakeStoreData, setFakeStoreData] = useState<FakeStore[]>([])
  const [loading, setLoading] = useState(false)
  const [ascOrder, setAscOrder] = useState(true)
  const navigate = useNavigate()

  const getFakeStoreData = async () => {
    try {
      setLoading(true)
      const response = await getData()
      setFakeStoreData(
        response.data.sort((a: FakeStore, b: FakeStore) => a.price - b.price)
      )
      console.log(fakeStoreData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      navigate('/error')
    }
  }

  useEffect(() => {
    getFakeStoreData()
  }, [navigate])

  const handleClickButton = () => {
    ascOrder
      ? setFakeStoreData(
        fakeStoreData.sort((a: FakeStore, b: FakeStore) => b.price - a.price)
      )
      : setFakeStoreData(
        fakeStoreData.sort((a: FakeStore, b: FakeStore) => a.price - b.price)
      )

    setAscOrder(!ascOrder)
  }

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {fakeStoreData && (
            <article>
              <div>
                <button type="button" onClick={handleClickButton}>
                  {ascOrder ? 'Desc' : 'Asc'}
                </button>
              </div>
              <div>
                {fakeStoreData.map((fakeStore) => (
                  <ListFakeStore key={fakeStore.id} list={fakeStore} />
                ))}
              </div>
            </article>
          )}
        </div>
      )}
    </main>
  )
}

export default Home
