import PropTypes from 'prop-types'
import { Fragment } from 'react'

function Quotes({ quotesData, isLoading }) {
  if (isLoading) return <LoadingQuote />
  return (
    <>
      {quotesData.map((data, i) => (
        <Fragment key={data.quote}>
          <Quote {...data} />
          {quotesData.length - 1 !== i ? <hr className="my-4" /> : null}
        </Fragment>
      ))}
    </>
  )
}

function LoadingQuote() {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

function Quote({ quote, author }) {
  return (
    <>
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title={author}>{author}</cite>
        </figcaption>
      </figure>
    </>
  )
}

const QuoteType = PropTypes.shape({
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
})

Quotes.propTypes = {
  quotesData: PropTypes.arrayOf(QuoteType.isRequired),
  isLoading: PropTypes.bool.isRequired,
}

Quote.propTypes = QuoteType.isRequired

export default Quotes
