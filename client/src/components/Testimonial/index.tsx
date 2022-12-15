import styles from './Testimonial.module.scss';
import user from '../../assets/img/user-2.png';

export const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.avatar}>
        <img src={user} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.nameDateRating}>
          <div className={styles.name}>
            Иван Иванов
          </div>
          <div className={styles.dateRating}>
            <div className={styles.date}>
              10.12.22
            </div>
            <div className={styles.rating}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className={styles.pros}>
          <h5>Достоинства</h5>
          Очень хороший телефон. Долго держит заряд. Прекрасная камера. Удобная операционная система Android 11. Красивый корпус, не маркий. Выглядит солидно.
        </div>
        <div className={styles.cons}>
          <h5>Недостатки</h5>
          Хотелось бы оперативной памяти побольше, поскольку я люблю понаоткрывать сотни вкладок в браузере, World Of Tanks, YouTube, Netflix и другие приложения одновременно.
        </div>
        <div className={styles.comments}>
          <h5>Комментарии</h5>
          Хороший телефон по соотношению цена-качество. Всем рекомендую к покупке.
        </div>
      </div>
    </div>
  );
};