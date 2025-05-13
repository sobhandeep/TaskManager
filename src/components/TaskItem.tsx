import React from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Task } from '../redux/tasks/types';
import { Swipeable } from 'react-native-gesture-handler';

type Props = {
  task: Task;
  onPress: () => void;
  onDelete: () => void;
};

const TaskItem = ({ task, onPress, onDelete }: Props) => {
  const renderRightActions = () => {
    return (
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{task.title}</Text>
        <Text>Status: {task.completed ? 'Completed' : 'Pending'}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 1,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default TaskItem;
