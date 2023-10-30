import { FakeStore } from '../../interfaces/fakestore.interface'

export interface PropsInterface {
  list: FakeStore
}

const ListFakeStore: React.FC<PropsInterface> = ({ list }) => {
  return (
    <div>
      <h3>Product Name: {list.title}</h3>
      Product Price: {list.price}
      <p></p>{' '}
    </div>
  )
}

export default ListFakeStore
