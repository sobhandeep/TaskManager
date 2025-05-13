import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleStatus } from '../redux/tasks/reducer';
import { useRoute, useNavigation } from '@react-navigation/native';

const TaskDetailsScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { taskId } = route.params;
  const dispatch = useDispatch();

  const task = useSelector((state: RootState) =>
    state.tasks.find(task => task.id === taskId)
  );

  if (!task) return <Text style={{ padding: 20 }}>Task not found.</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{task.title}</Text>
      <Text style={{ marginBottom: 20 }}>Status: {task.completed ? 'Completed' : 'Pending'}</Text>
      <Button
        title={`Mark as ${task.completed ? 'Pending' : 'Completed'}`}
        onPress={() => {
          dispatch(toggleStatus(task.id));
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default TaskDetailsScreen;