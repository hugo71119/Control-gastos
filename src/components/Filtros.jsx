import {useState, useEffect} from 'react'

function Filtros({filtro, setFiltro}) {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select 
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                    <option value="">-- Todas Las Categorias --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="uber">Uber</option>
                    <option value="queso">Queso</option>
                    <option value="pollo">Pollo</option>
                    <option value="carne">Carne</option>
                    <option value="juevesTianguis">JuevesTianguis</option>
                    <option value="miercolesTianguis">MiercolesTianguis</option>
                    <option value="ropa">Ropa</option>
                    <option value="propinas">Propinas</option>
                    <option value="gas">Gas</option>
                    <option value="gasolina">Propinas</option>
                    <option value="mecanico">Mecánico</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros
