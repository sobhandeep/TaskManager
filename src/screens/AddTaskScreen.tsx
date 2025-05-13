import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasks/reducer';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const tasks = useSelector((state: RootState) => state.tasks);

  const handleAdd = () => {
    if (!title.trim()) {
      Alert.alert('Please enter a title');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };

    dispatch(addTask(newTask));
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
};

export default AddTaskScreen;