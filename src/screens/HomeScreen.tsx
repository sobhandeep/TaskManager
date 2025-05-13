import React, { useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setTasks } from '../redux/tasks/reducer';
import { deleteTask } from '../redux/tasks/reducer';
import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/todos?_limit=10');
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
            onDelete={() => dispatch(deleteTask(item.id))}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;