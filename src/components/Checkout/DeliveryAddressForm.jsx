import React, { useState } from 'react'

const DeliveryAddressForm = () => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  })
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsConfirmed(false) // Reset confirmation
    setIsSubmitted(true)
  }

  const handleConfirm = () => {
    setIsConfirmed(true)
  }

  const handleEdit = () => {
    setIsSubmitted(false) // Allow editing again
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Delivery Address Form</h2>
      
      {!isConfirmed && !isSubmitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="street" style={styles.label}>Street Address</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label htmlFor="city" style={styles.label}>City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="state" style={styles.label}>State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="zip" style={styles.label}>Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="country" style={styles.label}>Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.submitButton}>Next</button>
        </form>
      ) : null}

      {isSubmitted && !isConfirmed ? (
        <div style={styles.confirmationContainer}>
          <h3 style={styles.confirmationHeading}>Please confirm your address:</h3>
          <p><strong>Street:</strong> {formData.street}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>Zip Code:</strong> {formData.zip}</p>
          <p><strong>Country:</strong> {formData.country}</p>

          <div style={styles.buttonGroup}>
            <button onClick={handleConfirm}  aleart ="Thank you"style={styles.confirmButton}>Confirm</button>
            <button onClick={handleEdit} style={styles.editButton}>Edit</button>
          </div>
        </div>
      ) : null}

      {isConfirmed && !isSubmitted && (
        <div style={styles.successMessage}>
          <h3>Your address has been confirmed!</h3>
          <p>Thank you for providing your address. We will process your order shortly.</p>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
    marginTop: '5px',
  },
  submitButton: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  confirmationContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  confirmationHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonGroup: {
    marginTop: '20px',
  },
  confirmButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#ffc107',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  successMessage: {
    textAlign: 'center',
    marginTop: '20px',
    backgroundColor: '#d4edda',
    padding: '20px',
    borderRadius: '8px',
    color: '#155724',
  },
}

export default DeliveryAddressForm
