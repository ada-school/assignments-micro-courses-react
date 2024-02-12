import {
  firstPicture,
  secondPicture,
  thirdPicutre,
  fourthPicutre,
} from './data'

export function App() {
  return (
      <section>
        <article>
          <h5>{firstPicture.paintingName}</h5>
          <img src={firstPicture.imgURL} alt='first' />
          <p>{firstPicture.author}</p>
        </article>

        <article>
          <h5>{secondPicture.paintingName}</h5>
          <img src={secondPicture.imgURL} alt='second' />
          <p>{secondPicture.author}</p>
        </article>

        <article>
          <h5>{thirdPicutre.paintingName}</h5>
          <img src={thirdPicutre.imgURL} alt='third' />
          <p>{thirdPicutre.author}</p>
        </article>

        <article>
          <h5>{fourthPicutre.paintingName}</h5>
          <img src={fourthPicutre.imgURL} alt='fourth' />
          <p>{fourthPicutre.author}</p>
        </article>
      </section>
  )
}
