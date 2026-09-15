import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemon, type Usuario } from '../context/PokemonContext';

export const RegistroUsuario: React.FC = () => {
  const { registrarEntrenador } = usePokemon();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipoDoc, setTipoDoc] = useState('CC');
  const [dni, setDni] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [datosPersonales, setDatosPersonales] = useState(false);

  const eventoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!datosPersonales) {
      alert('Aceptar política de privacidad');
      return;
    }

    const nuevo: Usuario = {
      id: Date.now(),
      nombreCompleto: `${nombre} ${apellido}`.trim(),
      documentos: { tipo: tipoDoc, numero: dni },
      fechaNacimiento,
      correo,
      datosPersonales,
      fechaRegistro: new Date().toLocaleDateString(),
    };

    registrarEntrenador(nuevo);
    navigate('/buscador');
  };

  return (
    <div>
      <header>
        <h2>Registro de Entrenadores</h2>
      </header>

      <div>
        <form onSubmit={eventoSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              name="nombre"
              required
              placeholder="Ej: Camilo"
            />
          </div>

          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              name="apellido"
              required
              placeholder="Ej: Perez"
            />
          </div>

          <div>
            <label htmlFor="tipoDoc">Tipo de Identificación:</label>
            <select id="tipoDoc" value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)} name="tipoDoc" required>
              <option value="CC">Cédula de Ciudadanía (CC)</option>
              <option value="TI">Tarjeta de Identidad (TI)</option>
              <option value="PA">Pasaporte (PA)</option>
            </select>
          </div>

          <div>
            <label htmlFor="dni">Número de Identificación:</label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value.replace(/[^0-9]/g, ''))}
              name="dni"
              placeholder="Ej: 123456789"
              maxLength={12}
              required
            />
          </div>

          <div>
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              name="fecha_nacimiento"
              required
            />
          </div>

          <div>
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="email"
              id="correo"
              name="correo"
              placeholder="micorreo@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="pais">País de domicilio:</label>
            <select id="pais" value={pais} onChange={(e) => setPais(e.target.value)} required>
              <option value="">Seleccione el país...</option>
              <option value="169">Colombia</option>
              <option value="023">Alemania</option>
              <option value="105">Brasil</option>
            </select>
          </div>

          <div>
            <label htmlFor="ciudad">Ciudad de domicilio:</label>
            <select id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
              <option value="">Seleccione la ciudad...</option>
              <optgroup label="Colombia">
                <option value="1101">Bogotá D.C</option>
                <option value="54001">Cúcuta</option>
                <option value="66001">Pereira</option>
                <option value="76001">Cali</option>
                <option value="13001">Cartagena</option>
              </optgroup>

              <optgroup label="Alemania">
                <option value="030">Berlin</option>
                <option value="040">Hamburgo</option>
                <option value="089">Munich</option>
                <option value="0221">Colonia</option>
                <option value="069">Francfort del Meno</option>
              </optgroup>

              <optgroup label="Brasil">
                <option value="21">Rio de Janeiro</option>
                <option value="61">Brasilia</option>
                <option value="71">Salvador de la Bahía</option>
                <option value="85">Fortaleza</option>
                <option value="31">Belo Horizonte</option>
              </optgroup>
            </select>
          </div>

          <div>
            <input
              type="checkbox"
              id="politica_datos"
              checked={datosPersonales}
              onChange={(e) => setDatosPersonales(e.target.checked)}
              name="politica_datos"
              required
            />
            <label htmlFor="politica_datos">Acepto la política de tratamiento de datos.</label>
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
               

            
