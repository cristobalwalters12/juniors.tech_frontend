import { Card } from '@material-tailwind/react'
import { Link, useSearchParams } from 'react-router-dom'

const DEFAULT_ORDERS = {
  votes: 'desc',
  date: 'asc'
}

export default function SidebarSearch () {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  const category = searchParams.get('category')

  const handleSortingOptionChange = (value) => () => {
    const newSort = value
    console.log(newSort)
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      const prevSort = newSearchParams.get('sort')
      const prevOrder = newSearchParams.get('order')
      let newOrder
      if (prevSort === newSort) {
        newOrder = prevOrder === 'desc' ? 'asc' : 'desc'
      } else {
        newOrder = DEFAULT_ORDERS[newSort]
        newSearchParams.set('sort', newSort)
      }
      newSearchParams.set('order', newOrder)
      return newSearchParams
    })
  }

  const handleSortingOptionReset = () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.delete('sort')
      newSearchParams.delete('order')
      return newSearchParams
    })
  }

  const handleCategoryChange = (e) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.set('category', e.target.value)
      return newSearchParams
    })
  }

  const handleCategoryReset = () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.delete('category')
      return newSearchParams
    })
  }

  return (
    <Card
      shadow={false}
      className="bg-accent-dark text-grey-dark h-full overflow-x-clip overflow-y-auto flex flex-col"
    >
      <div>
        <h2>Buscar:</h2>
        <div className="flex flex-col gap-2">
          <Link to="/search/posts">Publicaciones</Link>
          <Link to="/search/users">Usuarios</Link>
        </div>
      </div>
      <hr className="my-3" />
      <form>
        <fieldset>
          <div className="flex justify-between">
            <legend>Ordenar por</legend>
            {sort && (
              <button type="button" onClick={handleSortingOptionReset}>
                Restaurar
              </button>
            )}
          </div>
          <div className="flex flex-col">
            <button
              id="votes"
              name="sort"
              type="button"
              className="text-left"
              onClick={handleSortingOptionChange('votes')}
            >
              <p>Votos</p>
              {sort !== 'votes'
                ? (
                <small>Cualquiera</small>
                  )
                : order === 'asc'
                  ? (
                <small>Menos votadas primero</small>
                    )
                  : (
                <small>Más votadas primero</small>
                    )}
            </button>
            <button
              id="date"
              name="sort"
              type="button"
              className="text-left"
              onClick={handleSortingOptionChange('date')}
            >
              <p>Fecha</p>
              {sort !== 'date'
                ? (
                <small>Cualquiera</small>
                  )
                : order === 'asc'
                  ? (
                <small>Más recientes primero</small>
                    )
                  : (
                <small>Más antiguas primero</small>
                    )}
            </button>
          </div>
        </fieldset>
        <hr className="my-3" />
        <fieldset>
          <div className="flex justify-between">
            <legend>Filtrar por</legend>
            {category && (
              <button type="button" onClick={handleCategoryReset}>
                Restaurar
              </button>
            )}
          </div>
          <div>
            <input
              type="radio"
              id="L1w-xYdnDH"
              name="category"
              value="L1w-xYdnDH"
              checked={category === 'L1w-xYdnDH'}
              onChange={handleCategoryChange}
            />
            <label htmlFor="L1w-xYdnDH">Hojas de vida</label>
          </div>
          <div>
            <input
              type="radio"
              id="S5L4FfEnjz"
              name="category"
              value="S5L4FfEnjz"
              checked={category === 'S5L4FfEnjz'}
              onChange={handleCategoryChange}
            />
            <label htmlFor="S5L4FfEnjz">Proyectos grupales</label>
          </div>
          <div>
            <input
              type="radio"
              id="vq8EkwRM5Q"
              name="category"
              value="vq8EkwRM5Q"
              checked={category === 'vq8EkwRM5Q'}
              onChange={handleCategoryChange}
            />
            <label htmlFor="vq8EkwRM5Q">Ofertas de trabajo</label>
          </div>
          <div>
            <input
              type="radio"
              id="WsMK91X7dK"
              name="category"
              value="WsMK91X7dK"
              checked={category === 'WsMK91X7dK'}
              onChange={handleCategoryChange}
            />
            <label htmlFor="WsMK91X7dK">Sugerencias de cursos</label>
          </div>
          <div>
            <input
              type="radio"
              id="X9lWwZFUMs"
              name="category"
              value="X9lWwZFUMs"
              checked={category === 'X9lWwZFUMs'}
              onChange={handleCategoryChange}
            />
            <label htmlFor="X9lWwZFUMs">Portafolios</label>
          </div>
          <div>
            <input
              type="radio"
              id="xOnWXzDLgx"
              name="category"
              value="xOnWXzDLgx"
              checked={category === 'xOnWXzDLgx'}
              onChange={handleCategoryChange}
            />
            <label htmlFor="xOnWXzDLgx">Grupos de estudio</label>
          </div>
        </fieldset>
      </form>
    </Card>
  )
}
