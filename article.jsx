import React from 'react';

const Article = () => {
  return (
    <article className="article">
      <div className="container">
        <div className="article__wrapper">
          <div className="article__btn">
            <button >All articles</button>
          </div>
          <div className="article-content">
        <div className="article-content__tag">
          <span className="tag">#Typography</span>
        </div>
        <div className="article-content__title">
          <h1>Humane Typography in the Digital Age</h1>
        </div>
        <div className="article-content__img">
          <img src={} alt="Image"/>  
        </div>
        <div className="article-content__description">
          <p>
            An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.

            The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.

            But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. We have to go 500 years back in time to meet the first one.
          </p>
        </div>
        <div className="article-content__info">
          {/* Фото
              Имя
              Дата
              Просмотры
              Категория
          */}
        </div>
      </div>
        </div>
      </div>
      
    </article>
  )
};

export default Article