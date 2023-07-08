
import style from './Feedback.module.css';

export const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
        <button className={style.button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <section className={style.container}>
    <div className={style.content}>
      <p className={style.textBtn}>Good: {good}</p>
      <p className={style.textBtn}>Neutral: {neutral}</p>
      <p className={style.textBtn}>Bad: {bad}</p>
      <p className={style.totalText}>Total Feedback: {total}</p>
      <p className={style.totalText}>
        Positive Feedback Percentage: {positivePercentage}%
      </p>
    </div>
  </section>
);

export const Notification = ({ message }) => <p>{message}</p>;
