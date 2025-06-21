import { render, screen, fireEvent } from '@testing-library/react'
import Form from './Form'

describe('Form Component', () => {
  const mockSchema = {
    name: "Mock test Form",
    properties: {
      firstName: {
        type: "string",
        label: 'First Name',
        validation: {
          required: true,
        }
      },
      email: {
        type: "string",
        label: 'Email',
        validation: {
          required: true,
        }
      },
      showAdvanced: {
        type: "checkbox",
        label: 'Show Advanced Options',
        validation: {
          required: false
        }
      },
      advancedField: {
        type: "string",
        label: 'Advanced Field',
        validation: {
          required: false
        },
        showIf: {
          field: "showAdvanced",
          value: true
        }
      }
    },
    required: ["firstName", "email"]
  }

  it('renders basic fields with', () => {
    render(<Form formDataProps={mockSchema} />)
    expect(screen.getByLabelText(/First Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Show Advanced Options/)).toBeInTheDocument()
  })

  it('shows advanced field when advance checkbox is checked', () => {
     render(<Form formDataProps={mockSchema} />)
     const showAdvancedCheckbox = screen.getByLabelText(/Show Advanced Options/)
     fireEvent.click(showAdvancedCheckbox)
    expect(screen.getByLabelText(/Advanced Field/)).toBeInTheDocument()
  })

  it('can able to fill and submit the form ', () => {
    render(<Form formDataProps={mockSchema} />)
    const firstNameInput = screen.getByLabelText(/First Name/)
    const emailInput = screen.getByLabelText(/Email/)
    const submitButton = screen.getByText('Submit')
    
     fireEvent.change(firstNameInput, { target: { value: 'Sachin mittal' } })
    fireEvent.change(emailInput, { target: { value: 'sachinmittal@gmail.com' } })
    fireEvent.click(submitButton)
    
    expect(screen.getByText('Form Submitted')).toBeInTheDocument()
  })
}) 