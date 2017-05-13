import React, {  Component} from 'react';
import cn from 'classnames';
import s from './Command.scss';
/**
 * Command
 */
export class Command extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let commandItem = cn('list-group-item', {active: this.props.active})
    return (
      <li className={commandItem} key={this.props.command._id} data-id={this.props.command._id}>
        <div className={s.commandTitle}>{this.props.command.title}</div>
        <div>
          {
            this.props.command.tags.filter((tag)=> tag != "").map((tag)=> <div key={tag} className={s.commandTag}>{tag}</div>)
          }
        </div>
      </li>
    );
  }
}

export default Command;
