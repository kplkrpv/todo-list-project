import Task from '../Task/task';
import classnames from 'classnames/bind'
import styles from './list.module.scss'

const cx = classnames.bind(styles)

const List = ({ tasks, handleClickCompleted }) => { // Рисует массив задач, находящихся в state
    return (
      <div className={cx('list_tasks')}>
        {
          tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} handleClickCompleted={handleClickCompleted} key={it.id} />)
        }
      </div>
    )
  }

export default List;
