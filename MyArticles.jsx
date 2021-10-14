import React from 'react';

const MyArticles = () => {
  return (
    <div className="my-articles">
      <div className="container">
        <div className="my-articles__wrapper">
          <div className="my-articles-user">
            <div className="my-articles-user__info">
              <img src={} alt="user-avatar"/>
              <p>Janay Wright</p>
              <p>Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.</p>
            </div>
          </div>
          <div className="my-articles-content">
            <ul className="my-articles__list">
              <li className="my-articles__item">
                <div className="my-articles__item-img">
                  <img src={} alt="Image"/>
                </div>
                <div className="my-articles__item-tag">
                  <span className="tag">#Typography</span>
                </div>
                <h2 className="my-articles__item-title">Humane Typography in the Digital Age</h2>
                <p className="my-articles__item-description">
                  An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.
                </p>
                {/* 
                  Фото
                  Имя
                  Дата
                  Просмотры
                */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}; 

export default MyArticles;