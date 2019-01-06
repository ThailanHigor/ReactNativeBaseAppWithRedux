import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as TodoActions from 'store/actions/todos';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TodoList = ({ todos, addTodo }) => {
  return (
    <View style={styles.container}>
      { todos.map(todo => <Text key={todo.id}>{todo.payload.text}</Text>) }
      <TouchableOpacity onPress={() => { addTodo('Fazer outra Coisa'); }}>
        <Text>Adicionar Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,

  addTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
