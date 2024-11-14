import React from 'react';

function getMinutesToReadEmoji(minutes) {
  if (minutes < 30) {
    const roundedMinutes = Math.ceil(minutes / 5) * 5;
    return "☕️".repeat(roundedMinutes / 5) + ` ${minutes} min read`
  } else {
    const roundedMinutes = Math.ceil(minutes / 10) * 10;
    return "🍱".repeat(roundedMinutes / 10) + ` ${minutes} min read`
  }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const minutesToRead = getMinutesToReadEmoji(minutes)

  return (
    <article>
      <h3>{title}</h3>
      
      <small>{date}</small>
      
      <p>{preview}</p>

      <p>{minutesToRead}</p>
    </article>
  );
}

export default Article;
