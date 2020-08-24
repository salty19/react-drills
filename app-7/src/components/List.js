import React, {component} from 'react'List.jsimport Todo from './components/Todo' 

class List extends Component {
    render() {
        let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element} />
        })
    }
}

export default List 