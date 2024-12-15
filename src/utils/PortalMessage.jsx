import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

export const valuesForMessage = {
  p: chunks => <p>{chunks}</p>,
  span: chunks => <span>{chunks}</span>,
  strong: chunks => <strong>{chunks}</strong>,
  b: chunks => <strong>{chunks}</strong>,
  em: chunks => <em>{chunks}</em>,
  i: chunks => <em>{chunks}</em>,
  br: <br />
}

const PortalMessage = ({ values, ...props }) => {

  return (
    <FormattedMessage
      {...props}
      values={{
        ...valuesForMessage,
        ...values,
        a: chunks => (
          <a
            target={values.target || '_blank'}
            href={values.href || '#'}
          >
            {chunks}
          </a>
        ),
      }}
    />
  )
}


PortalMessage.propTypes = {
  values: PropTypes.object,
  defaultMessage: PropTypes.string,
}

export default PortalMessage;
