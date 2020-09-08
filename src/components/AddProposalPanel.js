import React, { useCallback, useMemo, useState } from 'react'
import { Button, TextInput, Info, Field, GU, Link } from '@aragon/ui'
import { useAppState } from '../providers/AppState'

import { ZERO_ADDR } from '../constants'

const DEFAULT_FORM_DATA = {
  title: '',
  link: '',
}

const AddProposalPanel = React.memo(({ onSubmit }) => {
  const { accountBalance } = useAppState()

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)

  const handleTitleChange = useCallback(event => {
    const updatedTitle = event.target.value
    setFormData(formData => ({ ...formData, title: updatedTitle }))
  }, [])

  const handleLinkChange = useCallback(event => {
    const updatedLink = event.target.value
    setFormData(formData => ({ ...formData, link: updatedLink }))
  }, [])

  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault()

      const { link, title } = formData
      onSubmit({
        title,
        link,
        amount: 0,
        beneficiary: ZERO_ADDR,
      })
    },
    [formData, onSubmit]
  )

  const errors = useMemo(() => {
    const { title } = formData

    return !title
  }, [formData])

  const submitDisabled = !formData.title || !formData.link

  if (accountBalance.toString() === '0') {
    return (
      <Info mode="error">
        You must have CSTK tokens to propose a grant. Switch to the address that
        holds your CSTK Tokens or{' '}
        <Link external href="https://commonsstack.org/apply">
          Apply to join the Trusted Seed
        </Link>
        .
      </Info>
    )
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Info mode="info">
        Please use the Gitcoin Grant title as the title for your proposal and
        include the link to the Grant down below.
      </Info>
      <Field
        label="Title"
        css={`
          margin-top: ${2 * GU}px;
        `}
      >
        <TextInput
          onChange={handleTitleChange}
          value={formData.title}
          wide
          required
        />
      </Field>
      <Field label="Link">
        <TextInput
          onChange={handleLinkChange}
          value={formData.link}
          wide
          required
        />
      </Field>
      <Button
        wide
        mode="strong"
        type="submit"
        disabled={errors.length > 0 || submitDisabled}
        css={`
          margin-bottom: ${2 * GU}px;
        `}
      >
        Submit
      </Button>
      {errors.length > 0 && (
        <Info
          mode="warning"
          css={`
            margin-top: ${2 * GU}px;
          `}
        >
          {errors.map((err, index) => (
            <div key={index}>{err}</div>
          ))}
        </Info>
      )}
    </form>
  )
})

export default AddProposalPanel
