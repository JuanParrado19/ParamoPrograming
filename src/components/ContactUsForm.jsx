import { useState } from "react"

// Expresiones regulares para validación
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[0-9]{10}$/
const SQL_INJECTION_REGEX = /(\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|DROP)\b)|([';])/i

const ContactUsForm = () => {
  const [phoneContact, setPhoneContact] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})

  const validateField = (name, value) => {
    if (SQL_INJECTION_REGEX.test(value)) {
      return "Entrada no válida"
    }
    switch (name) {
      case "email":
        return EMAIL_REGEX.test(value) ? "" : "Formato de email inválido"
      case "phone":
        return phoneContact && !PHONE_REGEX.test(value) ? "Debe contener 10 dígitos" : ""
      default:
        return value.trim() === "" ? "Este campo es requerido" : ""
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length === 0) {
      // Aquí iría la lógica para manejar el envío del formulario
      console.log("Formulario válido, enviando datos:", formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto drop-shadow-lg">
      <form onSubmit={handleSubmit} className="bg-gradient-to-t from-paramo-secondary-300 via-paramo-analogous-3-400 to-paramo-analogous-3-600 shadow-md rounded-lg px-8 pt-6 pb-3 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Contáctanos</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`shadow appearance-none border-paramo-400 rounded w-full py-2 px-3 bg-white font-display text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`shadow appearance-none bg-white border-paramo-400 rounded w-full py-2 px-3 text-gray-700 font-display leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="phoneContact"
              checked={phoneContact}
              onChange={(e) => setPhoneContact(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="phoneContact" className="text-sm text-white">
              Contacto por teléfono
            </label>
          </div>
        </div>

        {phoneContact && (
          <div className="mb-4 transition-all duration-300 ease-in-out">
            <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`shadow appearance-none bg-white border-paramo-400 rounded w-full py-2 px-3 text-gray-700 font-display leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? "border-red-500" : ""}`}
              placeholder="Tu número de teléfono"
            />
            {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>}
          </div>
        )}

        <div className="mb-2">
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Solicitud
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`shadow appearance-none border-paramo-400 bg-white rounded w-full py-2 px-3 text-gray-700 font-display leading-tight focus:outline-none focus:shadow-outline ${errors.message ? "border-red-500" : ""}`}
            placeholder="Escribe tu solicitud aquí"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message}</p>}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-paramo-primary-600 hover:bg-paramo-primary font-display text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm

