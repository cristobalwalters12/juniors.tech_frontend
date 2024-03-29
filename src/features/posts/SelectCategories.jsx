import { Option, Select } from '@material-tailwind/react'

const SelectCategories = (props) => {
  return (
    <Select {...props}>
      <Option value="1">Proyectos grupales</Option>
      <Option value="2">Hojas de vida</Option>
      <Option value="3">Portafolios</Option>
      <Option value="4">Ofertas de trabajo</Option>
      <Option value="5">Sugerencias de cursos</Option>
    </Select>
  )
}

export { SelectCategories }
