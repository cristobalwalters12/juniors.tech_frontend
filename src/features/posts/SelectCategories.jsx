import { Option, Select } from '@material-tailwind/react'

const SelectCategories = (props) => {
  return (
    <Select {...props}>
      <Option value="Proyectos grupales">Proyectos grupales</Option>
      <Option value="Hojas de vida">Hojas de vida</Option>
      <Option value="Portafolios">Portafolios</Option>
      <Option value="Ofertas de trabajo">Ofertas de trabajo</Option>
      <Option value="Sugerencias de cursos">Sugerencias de cursos</Option>
    </Select>
  )
}

export { SelectCategories }
