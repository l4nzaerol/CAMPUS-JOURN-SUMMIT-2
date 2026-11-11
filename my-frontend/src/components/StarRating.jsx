import { RATING_LABELS } from '../config'

const SCORES = [1, 2, 3, 4, 5]

export default function StarRating({ name, value, onChange, labels = RATING_LABELS }) {
  return (
    <fieldset className="stars">
      <legend className="sr-only">Rating</legend>
      <div className="stars-row" role="radiogroup" aria-label={name}>
        {SCORES.map((score) => {
          const selected = value >= score
          const picked = value === score
          return (
            <button
              key={score}
              type="button"
              className={picked ? 'star on picked' : selected ? 'star on' : 'star'}
              aria-pressed={picked}
              aria-label={`${score} ${labels[score]}`}
              onClick={() => onChange(score)}
            >
              <span className="star-num">{score}</span>
              <svg className="star-glyph" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.7 14.7 9.3 21.8 9.8 16.2 14.4 18 21.3 12 17.5 6 21.3 7.8 14.4 2.2 9.8 9.3 9.3 12 2.7Z" />
              </svg>
            </button>
          )
        })}
      </div>
      <p className={`stars-hint${value ? ' is-set' : ''}`}>{value ? labels[value] : 'Select a rating'}</p>
    </fieldset>
  )
}
